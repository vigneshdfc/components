import React from "react";

const Follwers = ({ Name, Place }) => {
  const [buttonText, setButtonText] = React.useState(false);
  return (
    <div className="modelsection">
      <div className="models">
        <h4>{Name}</h4>
        <i>{Place}</i>
        {!buttonText ? (
          <div className="button_change">
            <button onClick={() => setButtonText(true)}>Follow</button>
          </div>
        ) : (
          <div className="button_change">
            <button onClick={() => setButtonText(false)}>Unfollow</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Follwers;
