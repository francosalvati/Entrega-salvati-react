import { createRef } from "react"
import { CartItem } from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { CheckOut } from "../../CheckOut/CheckOut"


export const CartList = ({ cartList, totalPrice }) => {

    return (
        <>
            <h3 className="carrito pb-2 ps-5 ">Carrito</h3>
            {
                cartList.length > 0 ?
                    <>
                        <ul className="cart__list mt-5">
                            {cartList.map((product, index) => <CartItem product={product} key={index} />)}
                        </ul>
                        <div>
                            <span>Vaciar Carrito</span>
                        </div>
                        <div className="text-end mt-5">
                            <span className="d-block m-3">Total: {totalPrice}</span>
                        <CheckOut btn={'Comprar'} cart={true}/>
                        </div>
                    </>
                    :

                    <div className="d-flex flex-column justify-content-center align-items-center h-100">
                        <p className="d-block">No existe nada dentro de tu carrito</p>
                        <small className="text-muted d-block">Queres estar a la moda? comprate algo Poco Amoroso</small>
                        <Link to={'/'} className="btn btn-primary mt-5">Ver Productos</Link>
                    </div>
            }
        </>
    )
}