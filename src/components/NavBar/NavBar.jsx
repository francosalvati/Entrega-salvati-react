
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'


function NavBar() {

    return (
        <>
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div className="d-flex w-100">
                        <div className='col'>
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none logo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-heartbreak text-danger me-4 " viewBox="0 0 16 16">
                                <path d="M8.867 14.41c13.308-9.322 4.79-16.563.064-13.824L7 3l1.5 4-2 3L8 15a38.094 38.094 0 0 0 .867-.59Zm-.303-1.01-.971-3.237 1.74-2.608a1 1 0 0 0 .103-.906l-1.3-3.468 1.45-1.813c1.861-.948 4.446.002 5.197 2.11.691 1.94-.055 5.521-6.219 9.922Zm-1.25 1.137a36.027 36.027 0 0 1-1.522-1.116C-5.077 4.97 1.842-1.472 6.454.293c.314.12.618.279.904.477L5.5 3 7 7l-1.5 3 1.815 4.537Zm-2.3-3.06-.442-1.106a1 1 0 0 1 .034-.818l1.305-2.61L4.564 3.35a1 1 0 0 1 .168-.991l1.032-1.24c-1.688-.449-3.7.398-4.456 2.128-.711 1.627-.413 4.55 3.706 8.229Z" />
                            </svg>
                            <h4 className=''>PocoAmoroso</h4>
                        </a>
                        </div>

                        <div className='col'>
                            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                                <li><Link to={`/category/socks`} className="nav-link px-2 text-white">Medias</Link></li>
                                <li><Link to={`/category/cap`} className="nav-link px-2 text-white">Gorras</Link></li>
                                <li><Link to={`/category/t-shirt`} className="nav-link px-2 text-white">Remeras</Link></li>
                                <li><Link to={`/category/grinder`} className="nav-link px-2 text-white">Picas</Link></li>
                            </ul>
                        </div>


                        <div className="text-end col">
                            <CartWidget />
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar