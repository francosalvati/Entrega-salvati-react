import { useState } from "react";

export const Counter = ({ min = 1, max, init = 1}) => {

  const [ number, setNumber ] = useState(init);

  const onHandleNumberAdd = () => {
    if(number <= max ) setNumber(number + 1)

  }

  const onHandleNumberRest = () =>{
    if(number > min) setNumber(number - 1)
  }


  return (
    <div className="counter text-center">
        <div className="input-group p-0">
          <button
            className="btn btn-outline"
            type="button"
            id="button-addon1"
            onClick={onHandleNumberRest}
          >
            -
          </button>
          <input
            type="number" 
            className="form-control text-center m-auto"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            readOnly
            value={number}
          />
          <button
            className="btn btn-outline"
            type="button"
            id="button-addon1"
            onClick={onHandleNumberAdd}
          >
            +
          </button>
        </div>
    </div>
  );
};
