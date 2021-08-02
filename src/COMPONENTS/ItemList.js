import React from 'react'
import Item from "./Item"

const ItemList = ({arts}) => {
  return (
    <div> {
      arts ? arts.map((art) => {
        return (
          <Item key={art.numSerie} title={art.artista}>
            {art.tecnica}
          </Item>
        );
      })
        : null}
    </div>
  );
};
export default ItemList;
