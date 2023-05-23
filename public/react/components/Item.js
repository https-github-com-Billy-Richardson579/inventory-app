import React from 'react';

export const Item = ({item}) => {

  return <>
    <h3>{item.title}</h3>
    <img src={item.image} alt={item.name}/>
  </>
} 