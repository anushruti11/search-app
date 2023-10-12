import React, { useState } from 'react';

const ProductItem = ({ product, onHover }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(false);
  };

  return (
    <div className={`product-item ${isHovered ? 'hovered' : ''}`}>
      <span>{product.name}</span>
      <button className="view-button">View Product</button>
    </div>
  );
};

export default ProductItem;
