import React from "react";
import spinner from "./Spinner.gif";

export default () => {
  return (
    <div>
      <img
        src={spinner}
        style={{
          width: "180px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          position: "absolute",
          top: "50%",
          left: "45%",
          marginRight: "-50%",
        }}
        alt="Loading..."
      />
    </div>
  );
};
