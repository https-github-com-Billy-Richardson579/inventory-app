import React from 'react';
import { Item } from './item';

export const ItemList = ({items, onPageClick}) => {
	return <>
		{
			items.map((item, idx) => {
				return <Item item={item} key={idx} onClick = {() => onPageClick(item.id)} />
			})
		}
	</>
} 