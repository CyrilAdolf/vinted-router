import React from "react";
import "../Assets/css/loading.css";

const LoadingComponent = () => {
  return (
    <div className="loadingPosition">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingComponent;
