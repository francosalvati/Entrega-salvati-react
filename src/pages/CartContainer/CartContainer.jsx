import { useContext } from "react"
import { CartList } from "./CartList/CartList"
import { useCartContext } from "../../context/CartContext"
import './CartContainer.css'

export const CartContainer = () => {

    const {
        cartList,
        onAddCart,
        cleanCart,
        totalPrice
    } = useCartContext()

    return (
        <div className="d-flex cart justify-content-center mt-5 ">
            <div className="cart__container card shadow p-5">
                <CartList cartList={cartList} totalPrice={totalPrice()}/>
            </div>
        </div>
    )
}