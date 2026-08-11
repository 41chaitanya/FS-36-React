import CartCard from "../components/CartCard.jsx";

const Cart = ({ selectedProduct }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {selectedProduct.map((product) => {
          console.log(product)
          return <CartCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Cart;
