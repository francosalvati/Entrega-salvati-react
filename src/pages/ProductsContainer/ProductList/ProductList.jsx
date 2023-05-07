
import Product from "../Product/Product"
import { memo } from "react"


export const ProductList = memo(({ products }) => { 


    return (
        <>
            {
                products.length > 0
                ?
                <div className="grid container mt-4">
                    {products.map(p => <Product product={p} key={p.id} />)}
                </div>
                :
                <div className="centrar">
                    <h2 className="text-light display-4">No existe ningun elemento</h2>
                </div>   
        }
        </>
    )
})