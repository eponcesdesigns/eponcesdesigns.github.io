import "primeicons/primeicons.css";  
import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Acerca from "./pages/Acerca";
import Informacion from "./pages/Informacion";
import Proyectos from "./pages/Proyectos";
export default class App extends React.Component {
 render(){
  return (
    <>
    <HashRouter>
          <Routes>
            <Route exact path="/" element={<><Acerca /></>} />
            <Route exact path="/acerca_de" element={<><Acerca /></>} />
            <Route exact path="/proyectos" element={<><Proyectos /></>} />
            <Route exact path="/informacion" element={<><Informacion /></>} />
            <Route path="/*" element={<><Navigate to="/"/></>} />
          </Routes>
        </HashRouter>
    </>
  );
 }
}
