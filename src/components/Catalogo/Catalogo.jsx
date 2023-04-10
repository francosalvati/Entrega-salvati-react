import { useEffect, useState } from "react";
import { promise } from "../../api/api-cosas";
import Card from "../Card/Card";
import './Catalogo.css'
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Catalogo = () => {

    const { catid } = useParams()
    const [catalogo, setCatalogo] = useState([]);

    useEffect(() => {
        setCatalogo([])
        if (catid) {
            promise()
                .then((res) => setCatalogo(res.filter(cat => cat.producto === catid)))
                .catch((err) => console.log(err));
        } else {
            promise()
                .then((res) => setCatalogo(res))
                .catch((err) => console.log(err));
        }
    }, [catid]);

    return (
        <>
            <div className="container contenedor">
                {
                    catalogo.length !== 0 ?
                        <div className="catalogo mt-4">
                            {catalogo.map((item, index) => (<Card producto={item} key={index} />))}
                        </div>
                        :
                        <Spinner />
                }
            </div>
        </>
    );
};

export default Catalogo;
