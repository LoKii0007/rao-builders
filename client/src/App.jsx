import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./screens/home"
import Navbar from './components/navbar'
import Admin from './screens/admin'
import CarDetails from './screens/cardetails'
import LoginScreen from "./screens/loginScreen";
import Footer from "./components/footer";
import Contact from "./screens/contact";
import CarState from "./context/carcontext";
import About from "./screens/about"
import { Toaster } from "react-hot-toast";
import Team from "./screens/team";

function App() {

  return (
    <>
      <CarState>
      <Router>
        {window.location.pathname === "/loginscreen" || window.location.pathname ===  "/admin" ?"":<Navbar/>}
        <Routes>
          <Route exact path="/" element={ <Home/> }></Route>
          <Route exact path="/contact" element={ <Contact/> }></Route>
          <Route exact path="/about" element={ <About/> }></Route>
          <Route exact path="/team" element={ <Team/> }></Route>
          {/* <Route exact path="/cardetails/:id" element={ <CarDetails/> }></Route> */}
          <Route exact path="/cardetails" element={ <CarDetails/> }></Route>
          <Route exact path="/admin" element={ <Admin/> }></Route>
          <Route exact path="/loginscreen" element={ <LoginScreen/> }></Route>
        </Routes>
        <Toaster/>
        {window.location.pathname === "/loginscreen" || window.location.pathname ===  "/admin" ?"":<Footer/>}
      </Router>
      </CarState>
    </>
  )
}

export default App
