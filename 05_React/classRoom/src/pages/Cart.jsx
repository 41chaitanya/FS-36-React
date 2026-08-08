import CartCard from '../components/CartCard.jsx'

const Cart = ({selectedProduct}) => {
  
  return (
   <>
   
    {selectedProduct.map((product)=>{
      return <CartCard product={product} />
    })}
   
   </>
  )
}

export default Cart