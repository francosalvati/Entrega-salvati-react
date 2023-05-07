import { CartItem } from "../CartItem/CartItem"
import { Link } from "react-router-dom"
import { CheckOut } from "../../CheckOut/CheckOut"


export const CartList = ({ cartList, deleteProduct, handleQuantity }) => {

    return (
        <>
            {

                <>
                    <ul className="cart__list mt-5">
                        {cartList.map((product, index) => <CartItem product={product} key={index}  deleteProduct={deleteProduct} handleQuantity={handleQuantity}/>)}
                    </ul>
                </>

            }
        </>
    )
}