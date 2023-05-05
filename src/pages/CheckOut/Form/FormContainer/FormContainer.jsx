import { useState } from "react"
import { Form } from "../Form/Form"
import { FormValidator } from "../FormValidators/FormValidator"


// componente creado a partir de la función a la cual se le pasa un componente como props
const FormValidator = withFormValidation(Form)

export const FormContainer = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: ''
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <FormValidator formData={formData} onChange={onChange} />
        </div>
    )
}
