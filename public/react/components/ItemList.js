import React from 'react';

export const ItemList = ({ items, onItemClick }) => {
  return (
    <div>
      {items.map((item,index) => (
        <div key={index} onClick={() => onItemClick(item.id)}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};
