import Loading from "../Loading";
import "./buttonclick3.css"
import React, {useState} from "react";

function Buttonclick3({setIsLoading},{isLoading}) {
  const [isthisLoading,setthisIsLoading] = useState(true);
  if (isthisLoading){
    return(
      <button className='button-click-3' onClick={
        () => {setthisIsLoading(false)}
      }>♥️Una ultima vez amorchito♥️</button>
    )
  }else{
    return(
      <Loading setIsLoading={setIsLoading} isLoading={isLoading}></Loading>
    )
  }
}

export default Buttonclick3;