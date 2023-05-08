
import { useRef, useState } from "react"
import { Modal } from "./Modal"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useNavigate } from 'react-router'

export const CheckOut = ({ btn, cart, product }) => {

    //states
    const myModal = document.getElementById('exampleModal');
    console.log(myModal)

    const [id, setId] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        adress: '',
        email: ''
    })
    const navigate = useNavigate()

    const {
        cartList,
        handleCleanCart,
        totalPrice
    } = useCartContext()

    //handles

    const handleSubmit = (event) => {
        event.preventDefault()
        if (cart === true) {
            const order = {
                buyer: formData,
                items: cartList.map(({id, name, price}) => ({ id, name, price})),
                date: new Date(),
                total: totalPrice()
            }
            const db = getFirestore()
            
            const queryCollection = collection(db, 'orders')
            console.log(order)
            addDoc(queryCollection, order)
                .then(res => setId(res.id))
                .catch(err => console.log(err))
                .finally(() => {
                    handleCleanCart(),
                    navigate('/compras')
                })
            
        } else {
            console.log('else')
            const order = {
                buyer: formData,
                items: [{ id: product.id, name: product.name, price: product.price}],
                date: new Date(),
                total: product.price
            }
            const db = getFirestore()

            const queryCollection = collection(db, 'orders')

            addDoc(queryCollection, order)
                .then(res => setId(res.id))
                .catch(err => console.log(err))
                .finally(()=> {
                    navigate('/compras')
                })
        }

    }

    const handleOnChange = (event) => {
        console.log(event.target.value)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
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
                        <button type="button" className="btn btn-primary w-75 text-nowrap" data-bs-toggle="modal"data-bs-target="#exampleModal">
                            {btn}
                        </button>
                        <Modal formData={formData} handleOnChange={handleOnChange} handleSubmit={handleSubmit} />
                    </>
            }
        </>
    )

}