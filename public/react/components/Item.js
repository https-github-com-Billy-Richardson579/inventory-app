import React from 'react';

export const Item = ({ item, onClick }) => {


  return (
    <>
    <div id="items">
      <img id="images"src={item.image}/>
      <h3 onClick={onClick}>{item.title}</h3>
      </div>
    </>
  );
};