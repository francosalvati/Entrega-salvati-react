

export const Form = ({ formData, errors, validateForm, onChange }) => {

    /**
     * If the form is valid, then log 'enviar formulario' to the console.
     */
    const hanleSubmit = (event) => {
        event.preventDefault()

        if (validateForm()) {
            console.log('enviar formulario')
        }
    }

    return (
        <center>
            <form class="row g-3 needs-validation" onSubmit={hanleSubmit}>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Name</label>
                    <input type="text" class="form-control" id="validationCustom01" value="Mark" />

                    <div class="invalid-feedback">
                        Introduce un nombre.
                    </div>

                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div class="col-md-4">
                    <label for="validationCustomUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type='text'
                            name='email'
                            placeholder="ingrese el mail"
                            onChange={(e) => onChange(e)}
                            value={formData.email} 
                            class="form-control" 
                            id="validationCustomUsername" 
                            aria-describedby="inputGroupPrepend"/>
                        <div class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>


                <div class="col-md-6">
                    <label for="validationCustom03" class="form-label">Adress</label>
                    <input type="text" class="form-control" id="validationCustom03" required />
                    <div class="invalid-feedback">
                        Please provide a valid city.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
        </center>
    )
}