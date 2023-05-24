import { useState } from "react";

export const Form = ({ onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (e) => {
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
    const itemsData = {
      title,
      description,
      price,
      category,
      image
    };
    onSubmit(itemsData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={handleNameChange} required />
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
      <button type="button" onClick={onCancel}>Cancel</button>
    </form>
  );
};