import React from 'react'
import Item from "./Item"

const ItemList = ({arts}) => {
  return (
    <div> {
      arts ? arts.map((art, key) => {
        return (
          <Item key={key} image={art.image} title={art.title} price={art.price}>
          </Item>
        );
      })
        : null}
    </div>
  );
};
export default ItemList;
