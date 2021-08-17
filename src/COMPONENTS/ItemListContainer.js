import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const arr = [
            {
                numSerie: 1456,
                tecnica: "Óleo",
                artista: "Julieta Oro",
            },
            {
                numSerie: 1457,
                tecnica: "Óleo",
                artista: "Pabla Perez",
            },
            {
                numSerie: 1458,
                tecnica: "Óleo",
                artista: "Xord Criste",
            },
            {
                numSerie: 1459,
                tecnica: "Mixed media",
                artista: "Juan Jorge",
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