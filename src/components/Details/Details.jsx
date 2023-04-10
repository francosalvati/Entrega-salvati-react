import { useParams } from "react-router-dom";
import "./Details.css";
import { useEffect, useState } from "react";
import { promise } from "../../api/api-cosas";
import { Counter } from "../counter/counter";

const Details = ({}) => {
  const [producto, setProducto] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    promise(pid).then((res) => setProducto(res));
  }, [pid]);

  return (
    <>
      <div className="producto__card border-0 card mb-3">
        <div className="d-flex">
          <img src={producto.img} alt="" className="img-fluid rounded col-8" />
          <div className="card col m-4">
            <div className="row p-4">
              <h2>{producto.nombre}</h2>
            </div>
            <div className="input">
              <div className="position-relative p-0 bottom-0 w-100 text-center">
                <Counter max={producto.stock}></Counter>
                <button className="btn btn-dark w-100">Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
