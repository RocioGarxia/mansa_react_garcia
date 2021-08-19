import { useState } from "react";

export default function ItemCount({ stock, initial, onAdd = () => { } }) {
    const [contador, setContador] = useState(initial);
    const [error, setError] = useState("");

    const addItem = (num) => {
        if (stock >= contador + num && 0 <= contador + num) {
            setContador(contador + num)
            setError("");
        }

        else {
            setError("Fuishhh! Este producto se fue volando! Pronto repondremos el stock");
        }
    };

    return (
        <div className="ShowContador">

            <div onClick={addItem}>{contador}
                <p>{error}</p>
            </div>

            <div className="Botones">
                <button onClick={() => addItem(-1)}>-</button>
                <div>Estás llevando la siguiente cantidad de productos: {contador} </div>
                <button onClick={() => addItem(1)}>+</button>
                <button onClick={() => onAdd(contador)}> Agregar al Carrito </button>

            </div>

        </div>

    );
};
