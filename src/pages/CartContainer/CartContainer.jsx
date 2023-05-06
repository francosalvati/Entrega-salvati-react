import { useState } from "react"
import { CartList } from "./CartList/CartList"
import { useCartContext } from "../../context/CartContext"
import './CartContainer.css'
import { Link } from "react-router-dom"
import { CheckOut } from "../CheckOut/CheckOut"

export const CartContainer = () => {

    const {
        cartList,
        totalPrice,
        handleCleanCart,
        deleteProduct,
    } = useCartContext()

    return (
        <div className="d-flex cart justify-content-center mt-5 ">
            <div className="cart__container card shadow p-5">
                {
                    cartList.length > 0 ?
                        <div className="cart__grid">
                            <h3 className="carrito align-self-end pb-3 ps-5 m-0 ">Carrito</h3>
                            <CartList cartList={cartList} deleteProduct={deleteProduct}/>
                            <ul className="cart__actions d-flex align-item-start justify-content-around ls-none">
                                <li className="cart__clean-cart" onClick={handleCleanCart}>Vaciar Carrito</li>
                                <div className="">
                                <li className="">Total: {totalPrice()}</li>
                                <li className="">Resumen: {totalPrice()}</li>
                                </div>
                                <li className="">
                                    <CheckOut btn={'Comprar'} cart={true} carrito={true} />
                                </li>
                            </ul>
                        </div>
                        :
                        <div className="d-flex flex-column justify-content-center align-items-center h-100">
                            <p className="d-block">No existe nada dentro de tu carrito</p>
                            <small className="text-muted d-block">Queres estar a la moda? comprate algo Poco Amoroso</small>
                            <Link to={'/'} className="btn btn-primary mt-5">Ver Productos</Link>
                        </div>
                }
            </div>
        </div>
    )
}