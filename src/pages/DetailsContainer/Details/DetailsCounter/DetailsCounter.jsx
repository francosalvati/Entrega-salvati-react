import { useState } from "react";
import { CheckOut } from "../../../CheckOut/CheckOut";

export const DetailsCounter = ({ initial, stock, onAdd, product}) => {

    const [quantity, setQuantity] = useState(initial)

    const handleChange = (event) => {
        setQuantity(Number(event.target.value))
    }

    const handleOnAdd = () => {
        onAdd(quantity)
    }

    const options = () => {
        let options = []
        for (let i = initial; i <= stock; i++) {
            options.push(<option value={i} key={i} >Cantidad: {i}</option>)
        }
        return options
    }


    return (
        <>
            {
                stock > 0
                    ?
                    <>
                        <select className="form-select" onChange={handleChange}>
                            {
                                options().map((option => option))
                            }
                        </select>
                        <div className="w-75">
                            <small className="text-start">Stock: {stock}</small>
                        </div>
                        <div className="w-100 d-flex flex-column align-items-center ">
                            <CheckOut btn={'Comprar Ahora'} product={product}/>
                            <button className="btn btn-outline-primary w-75 mt-4" onClick={handleOnAdd}>Agregar al Carrito</button>
                        </div>
                    </>
                    :
                    <>
                        <p>No Hay Stock</p>
                        <div className="w-100 d-flex flex-column align-items-center ">
                            <button className="btn btn-primary w-75" disabled>Comprar ahora</button>
                            <button className="btn btn-outline-primary w-75 mt-4" disabled>Agregar al Carrito</button>
                        </div>
                    </>
            }

        </>
    )
}