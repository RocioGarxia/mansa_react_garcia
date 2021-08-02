import {useState} from "react";

const ItemCount = ( {stock, initial}) => {
    const [stockReq, setStockReq] = useState (initial);
    const [error, setError] = useState ("");

    const addItem = (num) => {
        if (stock >= stockReq + num && 0 <= stockReq + num) {
            setStockReq(stockReq + num)
            setError ("");
}
else {
setError ("Fuishhh! Este producto se fue volando! Pronto repondremos el stock");
}
    };

    return (
        <div className = "ShowContador">
   
    <div onClick = {addItem}>{stockReq}
    <p>{error}</p>
    </div>

<div className="Botones">
                <button onClick={() => addItem(-1)}>Restar una unidad de este artículo</button>
Estás llevando la siguiente cantidad de productos: {stockReq}
                <button onClick={() => addItem(1)}>Sumar una unidad de este artículo</button>
            </div>

</div>

    );
};

export default ItemCount;