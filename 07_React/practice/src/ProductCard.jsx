import React from 'react'


const ProductCard = ({ c }) => {
  console.log("rendering")

  return (
    <div className="product-card">

      <div className="product-image-container">
        <img
          src={c.image}
          alt={c.title}
          className="product-image"
        />
      </div>

      <div className="product-info">

        <span className="product-category">
          {c.category}
        </span>

        <h2 className="product-title">
          {c.title}
        </h2>

        <p className="product-description">
          {c.description}
        </p>

        <div className="product-rating">
          ⭐ {c.rating.rate}
          <span> ({c.rating.count} reviews)</span>
        </div>

        <div className="product-bottom">
          <span className="product-price">
            ${c.price}
          </span>

          <button className="buy-btn">
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  )
}

export default React.memo(ProductCard)