
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//components
import { ProductList } from "./ProductList/ProductList";
import { Spinner } from "./Spinner/Spinner"

//css
import './ProductsContainer.css'


export const ProductsContainer = () => {

    //params
    const { pid } = useParams()

    //Estados
    const [products, setproducts] = useState([])
    const [isLoading, setisLoading] = useState(true)


    //Firebase
    useEffect(() => {
        setisLoading(true)
        if (pid) {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')

            const queryFilter = query(
                queryCollection,
                where('product', '==', pid)
            )

            getDocs(queryFilter)
                .then(res => setproducts(res.docs.map(p => ({ id: p.id, ...p.data() }))))
                .catch(e => console.log(e))
                .finally(() => setisLoading(false))

        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'products')
            getDocs(queryCollection)
                .then(res => setproducts(res.docs.map(p => ({ id: p.id, ...p.data() }))))
                .catch(e => console.log(e))
                .finally(() => setisLoading(false))
        }
    }, [pid]);


    return (
        <>
            <div className="container contenedor">
                {isLoading ?
                    <div className="spinner">
                        <Spinner />
                    </div>
                    :
                    <ProductList products={products}/>
                }
            </div>
        </>
    );
}

