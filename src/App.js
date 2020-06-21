import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carouselcomponent from './Components/Carousel';
import Body from './Components/Body';

function App() {
  return (
    <div className="App">
      <div>
        <Carouselcomponent></Carouselcomponent>
      </div>
      <div>
        <Body></Body>
      </div>
      </div>
     
  );
}

export default App;
