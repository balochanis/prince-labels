import React from "react";
import {  BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "../Containers/Home";
import About from "../Containers/About";
import Contact from "../Containers/Contact";
import Service from "../Containers/Service";


function AppRouter() {
  return (
      <div>
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>}  />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/service" element={<Service/>}/>
        </Routes>
    </Router>
      </div>

  )
}

export default AppRouter;