const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  // 1. Read the Authorization header
  const authHeader = req.headers.authorization;

  // 2. Check header exists and starts with "Bearer "
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. No token provided.",
    });
  }

  // 3. Extract the token — everything after "Bearer "
  const token = authHeader.split(" ")[1];

  // 4. Verify the token against our secret
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach decoded user info to req so controllers can use it
    req.user = decoded; // { id, email, iat, exp }
    next();
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Invalid or expired token. Please log in again.",
    });
  }
};

module.exports = verifyToken;
