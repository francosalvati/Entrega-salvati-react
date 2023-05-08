import { doc, getFirestore, updateDoc } from "firebase/firestore"
import { Counter } from "../Counter/Counter"
import { useState } from "react";


export const CartItem = ({ product, deleteProduct }) => {


    const handleDeleteProduct = () => {
        deleteProduct(product.id, product.quantity)
    }


    return (


        <li className="cart__item mb-1 p-2 pb-4">
            <div className="row align-items-center">
                <div className="col-1">
                    <img src={product.image} alt="" />
                </div>
                <div className="d-flex flex-column col-5">
                    <span className="item__name">{product.name}</span>
                    <span className="item__quantity">Cantidad: {product.quantity}</span>
                </div>
                <div className="col">
                    <span className="item__delete" onClick={handleDeleteProduct}>Borrar Elemento</span>
                </div>
                <div className="col d-flex align-items-center justify-content-between">
                    {/* <Counter init={product.quantity} max={product.stock} /> */}
                    <span className="item__price fs-5 mx-2">${product.price}</span>
                </div>
            </div>
        </li>


    )
}