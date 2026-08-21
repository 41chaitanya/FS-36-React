import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div>{product.title}
    {product.imageUrl}
    </div>
  )
}

export default ProductCard