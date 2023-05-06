
import { useState } from "react"
import { Modal } from "./Modal"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"


export const CheckOut = ({ btn, cart, product}) => {

    //states
    const [id, setId] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        adress: '',
        email: ''
    })

    const {
        cartList,
        onAddCart,
        cleanCart,
        totalPrice
    } = useCartContext()

    //handles
    const handleSubmit = (event) => {
        event.preventDefault()
        if (cart === true) {
            const order = {
                buyer: formData,
                items: cartList.map(({ id, name, price }) => ({ id, name, price })),
                total: totalPrice()
            }
            const db = getFirestore()

            const queryCollection = collection(db, 'orders')

            addDoc(queryCollection, order)
                .then(res => setId(res.id))
                .catch(err => console.log(err))
                .finally(() => {
                    cleanCart()
                })
        } else {
            const order = {
                buyer: formData,
                items: [{id: product.id, name: product.name, price: product.price}],
                total: totalPrice()
            }
            const db = getFirestore()

            const queryCollection = collection(db, 'orders')

            addDoc(queryCollection, order)
                .then(res => setId(res.id))
                .catch(err => console.log(err))
        }
        window.location.href = '/'
    }

    const handleOnChange = (event) => {
        console.log(event.target.name)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    const handleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>

            {
                cart ?
                    <>
                        <button type="button" className="btn btn-outline-primary text-nowrap" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {btn}
                        </button>
                        <Modal formData={formData} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
                    </>
                    :
                    <>
                        <button type="button" className="btn btn-primary w-75 text-nowrap" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {btn}
                        </button>
                        <Modal formData={formData} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
                    </>
            }
        </>
    )

}