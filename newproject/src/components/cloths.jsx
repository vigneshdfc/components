import React from "react";

const Cloths = ({ name, price }) => {
  const [adding, setaddcount] = React.useState(0);
  const increase = () => setaddcount((a) => a + 1);

  const decrease = () => setaddcount((a) => a - 1);
  return (
    <div className="productsection">
      <div className="productcard">
        <h4>{name}</h4>
        <b>{price}</b>
        {!adding ? (
          <div className="btncontainer">
            <button className="controlbtn" onClick={increase}>
              Add to cart
            </button>
          </div>
        ) : (
          <div className="btncontainer">
            <h3>{adding}</h3>
            <button className="controlbtn" onClick={increase}>
              +
            </button>
            <button className="controlbtn" onClick={decrease}>
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cloths;
