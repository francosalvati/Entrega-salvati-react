import { collection, getDocs, getFirestore, limit, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Compras } from "./Compras"


export const ComprasContainer = () => {

    const [orders, setOrder] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = query(collection(db, "orders"), orderBy('date', "desc"))
        getDocs(queryCollection)
            .then(res => setOrder(res.docs.map(order => ({ id: order.id, ...order.data() }))))
            .catch(e => console.log(e))
            .finally(() => { setLoading(false) })
    }, [])
    return (
        <>
            {
                !loading ?
                    <div>
                        <Compras order={orders[0]} />
                        <ul className="list-group container">
                            {orders.map(orders => {
                                return (
                                    <li className="list-group-item d-flex justify-content-around" key={orders.id}> 
                                    <span>Nombre: {orders.buyer.name}</span> 
                                    <span>Direccion: {orders.buyer.adress} </span>
                                    <span>Productos: {orders.items[0].name}</span>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    :
                        ''
            }
        </>
    )
}