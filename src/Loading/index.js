import "./Loading.css"
import React from "react";

function Loading({ isLoading, setIsLoading }) {
  const handleButtonClick = () => {
    setIsLoading(false);
  };

  return (
    <button className='button-click-2' onClick={handleButtonClick}>
      ♥️Por aca amorcito♥️
    </button>
  );
}

export default Loading;