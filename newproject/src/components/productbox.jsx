import React from "react";

const Product = ({ name, price }) => {
  const [adding, setaddcount] = React.useState(0);

  const increase = () => setaddcount((a) => a + 1);

  const decrease = () => setaddcount((a) => a - 1);

  return (
    <div className="renderproducts">
      <div className="productbox">
        <h2>{name}</h2>
        <b>{price}</b>
        {!adding ? (
          <div className="btn__container">
            <button className="control__btn" onClick={increase}>
              Add to cart
            </button>
          </div>
        ) : (
          <div className="btn__container">
            <h3>{adding}</h3>
            <button className="control__btn" onClick={increase}>
              +
            </button>
            <button className="control__btn" onClick={decrease}>
              -
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
