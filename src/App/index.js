import LoadingBar from '../LoadingBar';
import Buttonclick1 from '../buttonclick1';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [isLoading,setIsLoading] = useState(true)

  const handleLoadingChange = (value) => {
    setIsLoading(value);
  };
  if (isLoading){
    return (
      <div className="App">
        <div className='App-container'>
          <p className='App-header'>
            Hola amor dale click al boton
          </p>
          <div className="images-container">
            <img className="cat-gif-left" src={"https://i.pinimg.com/originals/3c/e8/84/3ce884bb29ad1909a2c253354497420f.gif"} alt='cat' />
            <Buttonclick1 setIsLoading={handleLoadingChange} isLoading={isLoading}/>
            <img className="cat-gif-right" src={"https://i.pinimg.com/originals/3c/e8/84/3ce884bb29ad1909a2c253354497420f.gif"} alt='cat' />
          </div>
          <img className='cat-gif-top' src={"https://i.pinimg.com/originals/49/a2/bb/49a2bb1e7b9a8a376e2dc8f00113c33f.gif"} alt='cat' />
        </div>
      </div>
    )
  }else{
    return (
      <div className="App">
        <div className='App-container'>
          <LoadingBar></LoadingBar>
        </div>
      </div>
    );
  }
}

export default App;
