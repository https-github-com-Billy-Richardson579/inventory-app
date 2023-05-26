import React, { useState } from 'react';

export const UpdateListForm = ({ item, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);
  const [price, setPrice] = useState(item.price);
  const [category, setCategory] = useState(item.category);
  const [image, setImage] = useState(item.image);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedItem = {
      title,
      description,
      price,
      category,
      image,
    };
    onSubmit(updatedItem);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleTitleChange} required />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={handlePriceChange} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={handleDescriptionChange} required></textarea>
      </label>
      <label>
        Category:
        <input type="text" value={category} onChange={handleCategoryChange} required />
      </label>
      <label>
        Image:
        <input type="text" value={image} onChange={handleImageChange} required />
      </label>
      <button type="submit">Submit</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

