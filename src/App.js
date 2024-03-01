import React from "react"
import './App.css';
import {BrowserRouter ,Routes,Route } from "react-router-dom"
import Homes from "./Component/Homes";
import Loginsection from "./Component/Loginsection";
import About from "./Pages/About";
function App() {
  return (
    // comment added
    <BrowserRouter>
    <Routes>  
        <Route path="/" element={<Loginsection />} />  
        <Route path="/homes" element={<Homes />} />
        <Route path="/about" element={<About/>}/>

      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
