const User = require("../models/User");

// ─── GET all users ────────────────────────────────────────────────────────────
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      success: true,
      count: users.length,
      data: users,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── GET single user by ID ────────────────────────────────────────────────────
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ─── POST create a new user ───────────────────────────────────────────────────
const createUser = async (req, res) => {
  try {
    const { name, email, password, gender, profileImageUrl } = req.body;

    // If a file was uploaded via multipart form, use its path instead
    const imageUrl = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : profileImageUrl || null;

    const user = await User.create({
      name,
      email,
      password,
      gender,
      profileImageUrl: imageUrl,
    });

    // Remove password from response
    user.password = undefined;

    res.status(201).json({ success: true, data: user });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    res.status(400).json({ success: false, message: error.message });
  }
};

// ─── PUT replace a user entirely ─────────────────────────────────────────────
const replaceUser = async (req, res) => {
  try {
    const { name, email, password, gender, profileImageUrl } = req.body;

    const imageUrl = req.file
      ? `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`
      : profileImageUrl || null;

    // findOneAndUpdate with overwrite behaviour (PUT semantics)
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password, gender, profileImageUrl: imageUrl },
      { new: true, runValidators: true, overwrite: true }
    );

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    res.status(400).json({ success: false, message: error.message });
  }
};

// ─── PATCH update specific fields ────────────────────────────────────────────
const updateUser = async (req, res) => {
  try {
    // Prevent accidental password exposure — handle it separately if needed
    const allowedFields = ["name", "email", "password", "gender", "profileImageUrl"];
    const updates = {};

    allowedFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    if (req.file) {
      updates.profileImageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    }

    if (Object.keys(updates).length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "No valid fields provided to update" });
    }

    const user = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  } catch (error) {
    if (error.code === 11000) {
      return res
        .status(400)
        .json({ success: false, message: "Email already exists" });
    }
    res.status(400).json({ success: false, message: error.message });
  }
};

// ─── DELETE a user ────────────────────────────────────────────────────────────
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  replaceUser,
  updateUser,
  deleteUser,
};
