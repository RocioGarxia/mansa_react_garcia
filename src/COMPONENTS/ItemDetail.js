export default function ItemDetail ({title = "", description ="", price =""}) {

return (
<div className="item">
<div className="title">{title}</div> 
<div className="description">{description}</div>
<div className="price">{price}</div> 
</div>
)
}
