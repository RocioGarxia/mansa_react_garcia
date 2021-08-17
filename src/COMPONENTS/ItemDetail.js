import {useParams } from "react-router"

export default function ItemDetail ({title, description, price}) {

    const getItem = () => {
        return {
            id: id,
            title: "Naufragio",
            price: 2400
        }
    }

const { id } = useParams ()

const item = getItem (id)

return (
<div className="item">{item.id}
    <div className="title">{item.title}</div> 
    <div className="description">{item.description}</div>
    <div className="price">${item.price}</div> 
</div>
)
}
