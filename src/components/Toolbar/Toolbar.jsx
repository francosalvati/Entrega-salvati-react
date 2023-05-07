import { Link } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget'
import './Toolbar.css'

export const Toolbar = () => {

    return (
        <header className='m-0 p-3 shadow'>
            <div className='d-flex justify-content-between toolbar'>
                <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none logo">
                    PocoAmoroso
                </Link>
                <div className="text-end">
                    <Link to={'/cart'}><CartWidget /></Link>
                </div>
            </div>
        </header>
    )
}