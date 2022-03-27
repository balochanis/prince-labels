import React from "react";
import {  BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "../Containers/Home";
import About from "../Containers/About";


function AppRouter() {
  return (
      <div>
    <Router>
        <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/about" element={<About/>} />
        </Routes>
    </Router>
      </div>

  )
}

export default AppRouter;