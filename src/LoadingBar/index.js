import LoadingBar2 from "../Loadingbar2";
import "./LoadingBar.css"
import React, {useEffect, useState} from "react";

function LoadingBar() {
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  },[]);
  
  if (isLoading){
    return (
      <div className="Loading-container">
        <p className="Loading-message">Espera amorcito esta cargando</p>
        <img className="Loading-image" src={"https://i.pinimg.com/originals/3f/98/bc/3f98bc5d537e62b4cfeda40dc3759726.gif"}></img>
        <p className="Loading-message">Va ser rapido</p>
      </div>
    )
  }else{
    return(
      <LoadingBar2></LoadingBar2>
    )
  }
}

export default LoadingBar;