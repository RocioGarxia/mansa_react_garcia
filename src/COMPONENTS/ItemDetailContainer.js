import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import ItemList from "./ItemList";

const getItems = () => {
return fetch ("https://api.mercadolibre.com/sites/MLA/search?q="+id+"&limit=1")
.then(response => {
return response.json ()
})
}

const { id } = useParams()
 
export default function ItemDetailContainer () {

const [itemList, setItemList] = useState([])

useEffect (async () => {
    const data = await getItems ()
    const arr = []
    data.results.map(item => {
        /* arr.find( () => {} ) */
        console.log(item)
    })

    setItemList(arr)
}, [ItemList])

return (
<>
{ItemDetail}
</>
)
}
