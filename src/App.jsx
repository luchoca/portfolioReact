
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Inicio from "./Inicio/Inicio.jsx";
import Proyectos from "./Proyectos/Proyectos.jsx";
import SobreMi from "./SobreMi/SobreMi.jsx";
import Menu from "./Menu/Menu.jsx";



function App() {
  return (
    <div >
      <Menu/>
      <Inicio/>
      <Routes>
        <Route path="./Inicio/Inicio.jsx" element={<Inicio />} />
        <Route path="./Proyectos/Proyectos.jsx" element={<Proyectos />} />
        <Route path="./SobreMi/SobreMi.jsx" element={<SobreMi />} />
        <Route path="./Menu/Menu.jsx" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;
