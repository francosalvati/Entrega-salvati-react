import { useState } from "react"

export const FormValidator = (WrappedComponent) => { // withFormValidation(Form)

    // componente transformado
    const FormValidator = (props) => {
        const [errors, setError] = useState({})

        const FormValidate = () => {
            let newErrors = {}
            let isValid = true

            //name
            if (!props.formData.nombre) {
                newErrors.nombre = 'Debe introducir un Nombre'
                isValid = false
            }

            //mail
            if (!props.formData.email) {
                newErrors.email = 'Debe introducir un Email'
                isValid = false
            } else if (!/\S+@\S+\.\S+/.test(props.formData.email)) {
                newErrors.email = "El correo electrónico no es válido";
                isValid = false;
            }

            //Adress
            if (!props.formData.direccion) {
                newErrors.direccion = "La dirección es obligatoria";
                isValid = false;
            }


            setError(newErrors)
            return isValid
        }
        return (
            <WrappedComponent // Form
                {...props}
                errors={errors}
                validateForm={validateForm}
            /> // <Form validateForm error {...props}  />
        )

    }

    return WithFormValidation
}