

import { Link } from 'react-router-dom'
import './SideBar.css'
import { Filter } from './filter/Filter'


function SideBar() {

    return (
        <nav className='text-bg-light p-2 pt-4'>
            <Filter />
            <ul className="nav d-flex flex-column col-12 m-0 mb-2 p-0 ">
                <li className='text-muted fs-6 fw-bold border my-2 p-2'> Filtrar </li>
                <span className='nav__filter' >
                    <li><Link className="nav-link px-2">Precio</Link></li>
                    <li><Link className="nav-link px-2">Nuevo</Link></li>
                    <li><Link className="nav-link px-2">Moda</Link></li>
                </span>
                <li className='text-muted fs-6 fw-bold border my-2 p-2'> Categorias </li>
                <span className='nav__category' >
                    <li><Link to={`/socks`} className="nav-link px-2">Medias</Link></li>
                    <li><Link to={`/cap`} className="nav-link px-2">Gorras</Link></li>
                    <li><Link to={`/t-shirt`} className="nav-link px-2">Remeras</Link></li>
                    <li><Link to={`/pants`} className="nav-link px-2">Pantalones</Link></li>
                    <li><Link to={`/accessories`} className="nav-link px-2">Accesorios</Link></li>
                    <li><Link to={`/swetter`} className="nav-link px-2">Buzos</Link></li>
                </span>
                <li className='text-muted fs-6 fw-bold border my-2 p-2'> Compras </li>
                <span className='nav__shop' >
                    <li><Link className="nav-link px-2">Carrito</Link></li>
                    <li><Link to={`/compras`} className="nav-link px-2">Compras</Link></li>
                </span>
                <li className='text-muted fs-6 fw-bold border my-2 p-2'> Mas </li>
                <span className='nav__config'>
                    <li><a target='_blank' href='https://francosalvati.github.io/briefcase/' className="nav-link px-2">Franco Salvati</a></li>
                </span>
            </ul>
        </nav>
    )
}

export default SideBar