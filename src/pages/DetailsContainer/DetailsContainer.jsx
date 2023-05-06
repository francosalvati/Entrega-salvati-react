import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"


//component
import './DetailsContainer.css'
import { Details } from "./Details/Details"


export const DetailsContainer = () => {

    //CartContext


    //params
    const { id } = useParams()

    //Estados 
    const [product, setProduct] = useState({})

    useEffect(() => {
        const db = getFirestore()
        const queryDoc = doc(db, 'products', id)
        getDoc(queryDoc)
            .then(res => setProduct({ id: res.id, ...res.data() }))
            .finally()
    }, [id])

    return (
        <div className="container mt-4">
            <Details product={product} />
        </div>
    )
}