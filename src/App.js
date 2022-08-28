import './App.css';
import React from "react";
import FallingObjectsLab from "./pages/physics/fallingObjectsLab";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import FluidMechanics from "./pages/physics/fluidMechanics";
import Statistics from "./pages/physics/statistics";
import EnvironmentalSciences from "./pages/physics/environmentalSciences";
import Chemistry from "./pages/physics/chemistry";
import ComputerScience from "./pages/physics/computerScience";
import Electricity from "./pages/physics/electricity";


const Home = () => {
    return (
        <div>
            <h1>Semillero de Ciencias y Naturaleza</h1>
            <Layout/>
        </div>
    )
};


const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/fisica-mecanica">Fisica Mecánica</Link>
                    </li>
                    <li>
                        <Link to="/mecanica-de-fluidos">Mecánica de fluidos</Link>
                    </li>
                    <li>
                        <Link to="/electricidad">Electricidad</Link>
                    </li>
                    <li>
                        <Link to="/ciencias-de-la-computacion">Ciencias de la computación</Link>
                    </li>
                    <li>
                        <Link to="/estadistica">Estadística</Link>
                    </li>
                    <li>
                        <Link to="/ciencias-ambientales">Ciencias ambientales</Link>
                    </li>
                    <li>
                        <Link to="/quimica">Química</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};


function App() {
    return (
        <div className="App">
            <div className={"App-header"} style={{padding:"30px"}}>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path="fisica-mecanica" element={<FallingObjectsLab />} />
                        <Route path="mecanica-de-fluidos" element={<FluidMechanics/>}/>
                        <Route path="electricidad" element={<Electricity/>}/>
                        <Route path="Ciencias-de-la-computacion" element={<ComputerScience/>}/>
                        <Route path="Estadistica" element={<Statistics/>}/>
                        <Route path="Ciencias-ambientales" element={<EnvironmentalSciences/>}/>
                        <Route path="Quimica" element={<Chemistry/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}




export default App;
