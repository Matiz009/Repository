import { Container, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Blog } from "./Blog";



function App() {

  return ( 
    <>
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact likes='12'/>} />
      <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
/*
 
*/