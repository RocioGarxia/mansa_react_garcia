import React from 'react'
import Item from "./Item"

const ItemList = ({arts}) => {
  return (
    <div> {
      arts ? arts.map((art) => {
        return (
          <Item key={art.title} title={art.description}>
            {art.price}
          </Item>
        );
      })
        : null}
    </div>
  );
};
export default ItemList;
