import React,{useState} from 'react';

export const ItemDetails = ({ item, onBackToList, onDelete }) => {
  const { id, title, price, category, description, image } = item;
  const [updateItem, setUpdateItem]= useState(false)

  const handleDelete = () => {
    onDelete(id);
  };

  function handleUpdateItem() {
    setUpdateItem(true);
  }


  async function handleUpdateItemSubmit(itemData) {
    try {
      const response = await fetch(`${apiURL}/items/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData),
      });
      const newItem = await response.json();
      setItems([...items, newItem]);
      setUpdateItem(false);
    } catch (err) {
      console.log('Oh no an error! ', err);
    }
  }


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
      <>
        <button onClick={() => handleUpdateItem(true)}>
          <strong>Update</strong>
        </button>
      </>
    </div>
  );
};








