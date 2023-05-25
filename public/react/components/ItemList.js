import React from 'react';
import {Item} from './Item'

export const ItemList = ({ items, onItemClick }) => {
  return (
    <>
      {items.map((item,index) => (
        <Item item={item} key={index} onClick={() => onItemClick(item.id)}/>
      ))}
    </>
  );
};
