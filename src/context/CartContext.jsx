
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {


    //Estados
    const [cartList, setCartList] = useState([])


    //funciones

    const onAddCart = (newProduct) => {

        const indexProduct = cartList.findIndex( product =>  product.id === newProduct.id
        )
        
        if ( indexProduct === -1 ) {
            setCartList([
                ...cartList,
                newProduct
            ])
            console.log('if')
        } else {
            cartList[indexProduct].quantity += newProduct.quantity
            setCartList([...cartList])
            console.log('else')
        }
    }

    

    const totalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.quantity, 0)
    }

    const cleanCart = () => {
        setCartList([])
    }

    const deleteProduct = (pid) => {
        const indexProduct = cartList.indexOf(product => product.id === pid)
        setCartList(cartList.filter(p => p.id !== pid))
    }

    return (
        <CartContext.Provider value={{
            cartList,
            onAddCart,
            cleanCart,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}



