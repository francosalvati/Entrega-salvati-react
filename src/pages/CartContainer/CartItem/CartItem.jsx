import { Counter } from "../Counter/Counter"


export const CartItem = ({ product, deleteProduct }) => {

    const handleDeleteProduct = () => {
        deleteProduct(product.id, product.quantity)
    }

    return (


        <li className="cart__item mb-1 p-2 pb-4">
            <div className="row align-items-center">
                <div className="d-flex flex-column col-6">
                    <span className="item__name">{product.name}</span>
                    <span className="item__quantity">Cantidad: {product.quantity}</span>
                </div>
                <div className="col">
                    <span className="item__delete" onClick={handleDeleteProduct}>Borrar Elemento</span>
                </div>
                <div className="col d-flex align-items-center justify-content-between">
                    <Counter init={product.quantity} />
                    <span className="item__price">$ <span className="fs-5">{product.price}</span> x {product.quantity}</span>
                </div>
            </div>
        </li>


    )
}