import { Link } from 'react-router-dom';
import './Product.css'


const Product = ({ product }) => {

    return (
        <>
            <Link to={`/details/${product.id}`} className="card item">
                <div className='card__img'>
                    <img src={product.image} className="card-img-top" />
                </div>
            </Link>
        </>
    );
};

export default Product;
