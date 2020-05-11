import React from "react";

const Error = (props) => {
  const errorMsg = {
    color: "#a91717",
    textAlign: "center",
    marginBottom: "10px",
  };

  let errorDisplay = null;
  if (props.error != null) {
    errorDisplay = <p style={errorMsg}>{props.error}</p>;
  }

  return <div>{errorDisplay}</div>;
};

export default Error;
