import { createContext, useEffect, useState } from "react";


export const productContext=createContext()


const ProductProvider=({children})=>{

      const [allProduct, setAllProduct] = useState([]);
      useEffect(() => {
          (async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
      
            setAllProduct(data);
          })();
        }, []);
        
    const handleAddToCart = (product) => {
    //   setSelectedProduct((prev)=>[...prev,product])
  };
    // state  produit store kre gi 
    return(

        <productContext.Provider value={{allProduct,handleAddToCart}}>

        {children}

        </productContext.Provider>
    )
}

export default ProductProvider
