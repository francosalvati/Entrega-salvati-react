import { Link } from 'react-router-dom';
import { memo } from 'react';


const Product = memo(({ product }) => {

    return (
        <>
            <Link to={`/details/${product.id}`} className="card product__item link rounded-0">
                <div className='card__img'>
                    <img src={product.image} className="card-img-top" />
                </div>
                <div className='card-body'>
                    <span className='fs-5'>{product.name[0].toUpperCase() + product.name.substring(1)}</span>
                    <span className='d-block mt-2'>{product.price} $</span>
                </div>
            </Link>
        </>
    )
})

export default Product;
