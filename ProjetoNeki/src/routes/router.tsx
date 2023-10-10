import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import Register from "../Pages/Register";
import UpdateColaborador from "../Pages/UpdateColaborador";
import SingleHome from "../Pages/SingleHome";





export function Router() {
  return (
    <Routes >
      <Route path="/" element={<Home />}/>
      <Route path="Login" element={<Login />}/>
      <Route path="/colaborador/:colaboradorId" element={<SingleHome />} />
      <Route path="/Home"  element={<Home />}/>
      <Route path="/update/:colaboradorId" element={<UpdateColaborador />} />
      <Route path="/Register"  element={<Register />}/>
    </Routes>
  );
} 
