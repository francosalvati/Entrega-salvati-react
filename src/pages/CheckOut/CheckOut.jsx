
import { useState } from "react"
import { Modal } from "./Modal"


export const CheckOut = ({ btn, cart }) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>

            {
                cart ?
                    <>
                        <button type="button" className="btn btn-outline-primary w-25" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {btn}
                        </button>
                        <Modal />
                    </>
                    :
                    <>
                        <button type="button" className="btn btn-primary w-75" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            {btn}
                        </button>
                        <Modal />
                    </>
            }
        </>
    )

}