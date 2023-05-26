import React, { useState } from 'react';
import apiURL from '../api';
import { UpdateListForm } from './UpdateListForm';

export const ItemDetails = ({ item, onBackToList, onDelete }) => {
  const { id, title, price, category, description, image } = item;
  const [updateItem, setUpdateItem] = useState(false);

  const handleDelete = () => {
    onDelete(id);
  };

  const handleUpdateItem = () => {
    setUpdateItem(true);
  };

  const handleUpdateItemSubmit = async (updatedItem) => {
    try {
      const response = await fetch(`${apiURL}/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedItem),
      });
      const updatedItemData = await response.json();
      setUpdateItem(false);
      // Handle the updated item data as required 
      console.log('Item updated:', updatedItemData);
    } catch (error) {
      console.log('Error updating item:', error);
      // Handle the error
    }
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
      <button onClick={handleUpdateItem}>
        <strong>Update</strong>
      </button>
      {updateItem && (
        <UpdateListForm
          item={item}
          onSubmit={handleUpdateItemSubmit}
          onCancel={() => setUpdateItem(false)}
        />
      )}
    </div>
  );
};
