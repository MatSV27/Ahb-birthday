import Buttonclick3 from "../buttonclick3";
import "./buttonclick2.css"
import React, {useState} from "react";

function Buttonclick2({setIsLoading},{isLoading}) {
  const [isthisLoading,setthisIsLoading] = useState(true);
  if (isthisLoading){
    return(
      <button className='button-click-2' onClick={
        () => {setthisIsLoading(false)}
      }>♥️Clickea aquí amor♥️</button>
    )
  }else{
    return(
      <Buttonclick3 setIsLoading={setIsLoading} isLoading={isLoading}></Buttonclick3>
    )
  }
}

export default Buttonclick2;