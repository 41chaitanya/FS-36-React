import { createContext, useState } from "react";

export const showContext = createContext();
const ShowProvider = ({ children }) => {


      const [showProduct, setShowProduct] = useState(true);
    
  return <showContext.Provider value={{setShowProduct ,showProduct}}> {children}</showContext.Provider>;
};
export default ShowProvider