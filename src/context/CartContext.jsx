
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { json } from "react-router-dom";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {


    //Estados
    const [cartList, setCartList] = useState([])

    //localStorage


    useEffect(() => {
        const cartString = localStorage.getItem("cart")
        const cartJson = cartString ? JSON.parse(cartString) : []
        console.log(cartJson)
        if (Array.isArray(cartJson) && cartJson.length > 0) {
            setCartList(cartJson);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList))
    }, [cartList])


    //funciones

    const onAddCart = (newProduct) => {

        const indexProduct = cartList.findIndex(product => product.id === newProduct.id)
        if (indexProduct === -1) {
            setCartList([
                ...cartList,
                newProduct
            ])
        } else {
            cartList[indexProduct].quantity += newProduct.quantity
            cartList[indexProduct].stock = newProduct.stock
            setCartList([...cartList])
        }
    }

    const cleanCart = () => {
        setCartList([])
    }

    const deleteProduct = (pid, quantity) => {
        const productA = cartList.filter(p => p.id === pid)
        setCartList(cartList.filter(p => p.id !== pid))
        const intQuantity = parseInt(quantity)
        const db = getFirestore()
        const productDoc = doc(db, "products", pid)
        updateDoc(productDoc, { stock: productA[0].stock + intQuantity })
    }

    const handleCleanCart = () => {
        cartList.forEach(p => {
            const db = getFirestore()
            const productDoc = doc(db, "products", p.id)
            updateDoc(productDoc, { stock: p.stock + p.quantity })
            p.quantity = 0
        })
        cleanCart()
    }

    const handleQuantity = () => {

    }

    const totalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.quantity, 0)
    }


    return (
        <CartContext.Provider value={{
            cartList,
            onAddCart,
            cleanCart,
            totalPrice,
            deleteProduct,
            handleCleanCart
        }}>
            {children}
        </CartContext.Provider>
    )
}



