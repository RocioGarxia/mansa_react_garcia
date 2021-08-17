import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const arr = [
            {
                title: "Naugrafio",
                description: "Óleo",
                price: 1500,
            },
            {
                title: "Pabla Perez's dream",
                description: "Acrílico",
                price: 2400,
            },
            {
                title: "Xord Criste",
                description: "Collage",
                price: 3800,
            },
            {
                title: "Juan Jorge en el campo",
                description: "Mixed media",
                price: 600,
            }
        ]
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(arr);
            }, 2000)
        })
        task.then(value => setItems(value))
    }, [items])
    return ( <ItemList arts={items} /> )
}

export default ItemListContainer;