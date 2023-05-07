
export const Compras = ({ order }) => {
    console.log(order.buyer)
    return (
        <>
            <div className="container card m-4">
                <div className="card-body">
                    <h5 className="card-title">Datos del comprador</h5>
                    <p className="card-text">Nombre: {order.buyer.name}</p>
                    <p className="card-text">Dirección: {order.buyer.adress}</p>
                    <p className="card-text">Email: {order.buyer.email}</p>
                    <p className="card-text">Orden de compra: {order.id}</p>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        order.items.map(p => {
                            return (
                                <li className="list-group-item d-flex justify-content-between align-items-center">
                                    {p.name}
                                    <span className="badge bg-primary rounded-pill">{p.quantity}</span>
                                    <span className="badge bg-secondary rounded-pill">{p.price} $</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="card-body">
                    <h5 className="card-title">Precio total</h5>
                    <p className="card-text">{order.total} $</p>
                </div>
            </div>
        </>
    )
}