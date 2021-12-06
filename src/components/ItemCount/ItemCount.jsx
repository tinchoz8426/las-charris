import React, { useEffect, useState } from "react";
import "../ItemCount/ItemCount.css";

function ItemCount({ stock, onAdd, initial }) {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrementar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  
  useEffect(() => {
    onAdd(count);
  }, [count]);

  return (
    <>
      <div className="contador mb-4">
        <button className="btn btn-light" onClick={decrementar}>
          -
        </button>
        <div className="cantidad">{count}</div>
        <button className="btn btn-light" onClick={incrementar}>
          +
        </button>
      </div>
    </>
  );
}

export default ItemCount;
