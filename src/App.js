import './App.css';
import Navbar from './COMPONENTS/Navbar';
import ItemListContainer from "./COMPONENTS/ItemListContainer";
import ItemCount from "./COMPONENTS/ItemCount";
import React from 'react';

export default function App() {

  return (
    <div className="App">
  
<Navbar/>
<ItemListContainer/>
<ItemCount stock={10} initial={0}/>
</div>
  )
}
