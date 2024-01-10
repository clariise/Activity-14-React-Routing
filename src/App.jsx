import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx"
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
     
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
