import { useParams } from 'react-router-dom'
import './Details.css'
import { useEffect, useState } from 'react'
import { promise } from '../../api/api-cosas'

const Details = ({ }) => {

    const [producto, setProducto] = useState({})
    const { pid } = useParams()

    useEffect(() => {
        promise(pid)
            .then(res => setProducto(res))
    }, [pid])

    return (
        <>
            <div className="producto__card border-0 card mb-3">
                <div className="d-flex">
                    <img src={producto.img} alt="" className='img-fluid rounded col-8' />
                    <div className="card col m-4">{producto.nombre}</div>
                </div>
            </div >
        </>
    )
}

export default Details