
const Spinner = () => {
    return (
        <>
            <div className="container text-light d-flex justify-content-center align-items-center h-100">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow mx-4" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default Spinner
