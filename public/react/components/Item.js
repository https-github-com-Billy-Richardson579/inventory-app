import React from 'react';

export const Item = ({item, onClick }) => {

  return <>
    <h3 onClick={onClick}>{item.title}</h3>
    {/* <img src={item.image} alt={item.name} /> */}
  </>
} 