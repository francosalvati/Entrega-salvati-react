

export const Modal = ({ handleSubmit, handleOnChange, formData }) => {

    return (
        <>
            <div className="modal fade text-start" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Formulario</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form className="row g-3 needs-validation w-100 form-floating" onSubmit={handleSubmit}>
                                <div className="col-12">
                                    <label htmlFor="validationCustom01" className="form-label">Nombre</label>
                                    <input type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Nombre.."
                                        onChange={handleOnChange}
                                        value={formData.name}
                                        required />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label className="form-label">E-mail</label>
                                    <input type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="example@email.com"
                                        onChange={handleOnChange}
                                        value={formData.email}
                                        required />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="floatingInput" className="form-label">Direccion</label>
                                    <input
                                        type="text"
                                        id="floatingInput"
                                        className="form-control"
                                        name="adress"
                                        placeholder="Street 123"
                                        onChange={handleOnChange}
                                        value={formData.adress}
                                        required />
                                    <div className="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Comprar</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}