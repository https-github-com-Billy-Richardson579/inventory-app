import React, { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { ItemDetails } from './ItemDetails';
import { Form } from './Form';
import apiURL from '../api';

export default function App() {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [addItem, setAddItem] = useState(false);

  async function fetchSauces() {
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();
      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function fetchSelectedItem(id) {
    try {
      const response = await fetch(`${apiURL}/items/${id}`);
      const selectedItemData = await response.json();
      setSelectedItem(selectedItemData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  function handleItemClick(id) {
    fetchSelectedItem(id);
  }

  function handleAddItemClick() {
    setAddItem(true);
  }

  function handleBackToList() {
    setSelectedItem(null);
    setAddItem(false);
  }

  async function handleDeletePage(id) {
    try {                                                          
      await fetch(`${apiURL}/items/${id}`, { method: 'DELETE' });
      setItems(items.filter((item) => item.id !== id));
      setSelectedItem(null);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddItemSubmit(itemData) {
    try {
      const response = await fetch(`${apiURL}/items`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemData),
      });
      const newItem = await response.json();
      setItems([...items, newItem]);
      setAddItem(false);
    } catch (err) {
      console.log('Oh no an error! ', err);
    }
  }

  useEffect(() => {
    fetchItems();
    fetchSauces();
  }, []);

  return (
    <main>
      <h1>Best Store</h1>
      <h2>All things 🔥</h2>
      {selectedItem ? (
        <ItemDetails item={selectedItem} onBackToList={handleBackToList} onDelete={handleDeletePage} setItems={setItems} items={items} />
      ) : addItem ? (
        <Form onSubmit={handleAddItemSubmit} onCancel={handleBackToList} />
      ) : (
        <>
          <button onClick={handleAddItemClick}>Add Item</button>
          {/* <SaucesList sauces={sauces} /> */}
          <ItemList items={items} onItemClick={handleItemClick} />
        </>
      )}
    </main>
  );
}



