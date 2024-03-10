import Buttonclick2 from "../buttonclick2";
import "./buttonclick1.css"
import React, {useState} from "react";

function Buttonclick1({setIsLoading},{isLoading}) {
  const [isthisLoading,setthisIsLoading] = useState(true);
  if (isthisLoading){
    return(
      <button className='button-click-1' onClick={
        () => {setthisIsLoading(false)}
      }> ♥️Clickeame♥️ </button>
    )
  }else{
    return(
      <Buttonclick2 setIsLoading={setIsLoading} isLoading={isLoading}></Buttonclick2>
    )
  }
}

export default Buttonclick1;