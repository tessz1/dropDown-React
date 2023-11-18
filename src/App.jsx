import React from "react";
import Dropdown from "./components/DropDown";
import "./App.css"; 


const containerStyle = {
    position: "fixed",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  
function App() {
  return (
    <div style={containerStyle}>
      <Dropdown />
      
    </div>
  );
}

export default App;
