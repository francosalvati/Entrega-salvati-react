import './ItemListContainer.css'


const ItemListContainer = ({ greeting }) => {

    return (
        <>
            <div className='bg pt-4'>
                <div className="container ">
                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">el titulo de este item es {greeting}</div>
                                y la descripcion de {greeting} es: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure voluptatum soluta facere molestiae deserunt blanditiis sequi impedit odit mollitia maxime.
                            </div>
                            <span className="badge bg-primary rounded-pill">123</span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )

}

export default ItemListContainer;