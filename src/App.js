import React from "react"
import './App.css';
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Homes from "./Component/Homes";
import Loginsection from "./Component/Loginsection";
function App() {
  return (
    //something added
    <BrowserRouter>
    <Routes>  
        <Route path="/" element={<Loginsection />} />  
        <Route path="/homes" element={<Homes />} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
