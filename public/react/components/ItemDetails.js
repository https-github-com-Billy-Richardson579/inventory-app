import React from 'react';

export const ItemDetails = ({item}) => {
  const { title, price, image, category, description } = item;
  
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <p>{description}</p>
      <p>{category}</p>
      <p>{image}</p>
    </div>
  );
};
