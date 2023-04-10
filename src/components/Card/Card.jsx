import { Link } from 'react-router-dom';
import './Card.css'
import Details from '../Details/Details';
const Card = ({ producto, id }) => {
    return (
        <>
            <div className="card item">
                <div className='card__img'>
                    <img src={producto.img} className="card-img-top" />
                    <Link to={`/details/${producto.id}`} className='btn btn-outline-light detalles'>Detalles</Link>
                </div>
                <div className="card-body">
                    <h5 className="card-title display-6">$ {producto.precio} </h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Card;
