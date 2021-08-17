import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const getItems = () => {
return fetch ("https://api.mercadolibre.com/sites/MLA/search?q=arte")
.then(response => {
return response.json ()
})
}

export default function ItemListContainer () {

const [itemList, setItemList] = useState([])

useEffect (async () => {
    const data = await getItems ()
    const arr = []
    data.results.forEach (item => {
        arr.push(<ItemDetail key={item.id} title={item.title} description={item.id} price={item.price}></ItemDetail>)
    })

    setItemList(arr)
}, [])

return (
<>
{itemList}
</>
)
}
