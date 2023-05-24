import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemList } from "./ItemList";
import {ItemDetails} from "./ItemDetails"

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {
	const [sauces, setSauces] = useState([]);
	const [items, setItems] = useState([])
	const [selectedItem, setSelectedItem] = useState ({})

	async function fetchSauces(){
		try {
			const response = await fetch(`${apiURL}/sauces`);
			const saucesData = await response.json();
			
			setSauces(saucesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchItems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			setItems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchItemsDetails(id){
		try{
			const res = await fetch(`${apiURL}/items/${id}`);
			const itemData = await res.json();
			setSelectedItem(itemData);
		}
		catch(err){
			console.log("Error",err)
		}
	}

	function handleClick(id){
		fetchItemsDetails(id)
	}
	useEffect(() => {
		fetchSauces();
	}, []);

	useEffect(() => {
		fetchItems();
	}, []);

	return (
		<main>
			
      <h1>Sauce Store</h1>
	  <h2>All things 🔥</h2>
	  <h1> All Clothing Items</h1>
	  <SaucesList sauces={sauces} />
	  <ItemList items = {items} onPageClick={handleClick}/>
	  <ItemDetails item={selectedItem}/>
			
			
		</main>
	)
}