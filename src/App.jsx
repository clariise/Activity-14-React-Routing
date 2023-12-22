import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Services from "./pages/Services.jsx"
import NotFound from "./pages/NotFound.jsx"
import Login from "./pages/Login.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="services" element={<Services/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
