import React from 'react';

export const ItemList = ({ items, onItemClick }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} onClick={() => onItemClick(item.id)}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};







  