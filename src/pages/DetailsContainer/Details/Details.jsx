
//component
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { useCartContext } from "../../../context/CartContext";


//css
import "./Details.css";
import { DetailsCounter } from "./DetailsCounter/DetailsCounter";


export const Details = ({ product }) => {

  const { onAddCart } = useCartContext()

  const onAdd = (value) => {
    product.stock -= value
    const newProduct = { ...product, quantity: value }

    const db = getFirestore()
    const productDoc = doc(db, "products", product.id)
    updateDoc(productDoc, {stock: product.stock})
    console.log(newProduct)
    onAddCart(newProduct)
  }

  return (
    <>
      <div className="card p-4">
        <div className="row g-0">
          <div className="img col-8">
            <img src={product.image} alt={product.description} className="img-fluid" />
          </div>

          <div className="card p-3 col-4 justify-content-evenly align-items-center">
            <h3 className="mt-4">{product.name}</h3>
            <div className="display-6 m-4">{product.price}$</div>
            <p className="details__description">{product.description}</p>
            <DetailsCounter stock={product.stock} initial={1} onAdd={onAdd} product={product}/>
          </div>
        </div>
      </div>
    </>
  );
};

