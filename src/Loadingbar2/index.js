import "./Loadingbar2.css"
import React, {useEffect, useState} from "react";

function LoadingBar2() {
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  },[]);
  
  if (isLoading){
    return (
      <div className="Loading-container">
        <p className="Loading-message">Ya esta a punto de terminar de cargar</p>
        <img className="Loading-image" src={"https://i.pinimg.com/originals/3f/98/bc/3f98bc5d537e62b4cfeda40dc3759726.gif"}></img>
        <p className="Loading-message">Ya saleeee</p>
      </div>
    )
  }else{
    return(
      <div className="Hb-container">
        <img className="Hb-image" src={"https://i.pinimg.com/originals/8d/dc/29/8ddc290b8406f6d83e1f715f6dc047b7.gif"}></img>
        <p className="Hb-message"> 🎉FELIZ CUMPLEAÑOS ASHLLY MI AMOR :,)🎉</p>
        <div className="Hb-container-images">
            <img className="Hb-image-2" src={"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3f7aefa4-c572-47f5-84f7-786a83032a70/d3avg5s-95a6d541-7b75-4be2-ade1-1291ff92a4e9.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmN2FlZmE0LWM1NzItNDdmNS04NGY3LTc4NmE4MzAzMmE3MFwvZDNhdmc1cy05NWE2ZDU0MS03Yjc1LTRiZTItYWRlMS0xMjkxZmY5MmE0ZTkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r6L3BwxLTKZnFQq4zV_8xKPPMUKSULejwbFMypwayhg"}></img>
            <img className="Hb-image-3" src={"https://f.rpp-noticias.io/2017/01/08/322748tumblr-og2tvnqjtr1s7tb62o4-540gif.gif"}></img>
        </div>
        <p className="Hb-footer">Amor feliz 22 años, espero que de verdad la pases bien en tu día. Amor te mereces un montón de cosas de verdad</p>
        <p className="Hb-footer">De verdad fui muy suertudo el poder conocerte y que me brindaras tu amistad y después tu amor Ashlly</p>
        <p className="Hb-footer">Eres una de las personas más importantes para mí amor</p>
        <p className="Hb-footer">Enserio espero que nuestra relación juntos dure mucho más amor ♥️</p>
        <p className="Hb-footer-end">♥️TE QUIERO MUCHO MI AMOR, FELIZ CUMPLEAÑOS MI AMOR, TE ADORO MI CUCHURRUMIN♥️</p>
        <img className="Hb-image-4" src={"https://media1.tenor.com/m/KtXCOIl6ySgAAAAC/birthday-twice.gif"}></img>
      </div>
    )
  }
}

export default LoadingBar2;