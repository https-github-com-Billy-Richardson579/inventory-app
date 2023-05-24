import React from 'react';

export const ItemDetails = ({ item, onBackToList, onDelete }) => {
  const { id, title, price, category, description, image } = item;

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <h2>Item Detail</h2>
      <p>Name: {title}</p>
      <p>Price: {price}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Image: {image}</p>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={onBackToList}>Back</button>
    </div>
  );
};








