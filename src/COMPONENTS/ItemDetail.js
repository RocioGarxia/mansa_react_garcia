import {useParams } from "react-router"

const items = [
    {
        id: "83c75c0a-d8af-4498-8f9b-97cf0cf2fc87",
        title: "Naufragio",
        price: 2400
    },

    {
        id: "e55102ec-9931-4f5a-9af8-22c401d3ad68",
        title: "Soltar",
        price: 3900
    },

    {
        id: "63e6d71f-f011-4e1b-9799-bb5cb6974054",
        title: "Detalle de Luz",
        price: 3900
    },

    {
        id: "cfc4f140-c5e0-47b8-a49b-9b199aa55309",
        title: "Cigarette",
        price: 3900
    },
]

const getItem = () => {
    const item =items.find(item => item.id === id)
    return item
    
}

export default function ItemDetail () {

    const { id } = useParams ()

    const [item, setItem] = useState({})

    useEffect(() => {
        const item = getItem(id)
setItem(item)
    }, [])

   return (
       <>
       {id.lenght == 36 &&
       <>
        <div className="item">{item.id}
    <div className="title">{item.title}</div> 
    <div className="image">{item.image}</div>
    <div className="price">${item.price}</div> 
</div>
</>
    }
    </>
   )
}
