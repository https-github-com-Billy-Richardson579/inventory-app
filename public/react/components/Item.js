import React from 'react';

export const Item = ({ item, onItemClick }) => {
  const handleClick = () => {
    onItemClick(item.id);
  };

  return (
    <div onClick={handleClick}>
      <h3>{item.title}</h3>
    </div>
  );
};