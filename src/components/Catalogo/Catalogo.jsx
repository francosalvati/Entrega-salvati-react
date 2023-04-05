import { useEffect, useState } from "react";
import { promise } from "../../api/api-cosas";
import Card from "../Card/Card";
import './Catalogo.css'

const Catalogo = () => {
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    promise()
      .then((res) => setCatalogo(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="catalogo">
        
          {catalogo.map((item, index) => (<Card producto={item} key={index} />))}
            
      </div>
    </>
  );
};

export default Catalogo;
