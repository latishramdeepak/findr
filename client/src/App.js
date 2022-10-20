import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Workerdetails from "./components/Workerdetails";
import Mainservicea from "./components/Mainservicea";

import Acservice from "./components/Acservice";
import Carpenter from "./components/Carpenter";
import Painter from "./components/Painter";
import Roofing from "./components/Roofing";
import Electrician from "./components/Electrician";
import Saloon from "./components/Saloon";
import Cleaning from "./components/Cleaning";
import Button from "./components/Button";
import Message from "./components/Message";
import Logout from "./components/Logout";
import Workerlogin from "./components/Workerlogin";
import Workerhome from "./components/Workerhome";
import "./App.css";


const App = () => {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/"  element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='Service' element={<Service/>}/>
   
    
    <Route path='/Acservice' element={<Acservice/>}/>
    <Route path='/Carpenter' element={<Carpenter/>}/>
    <Route path='/Painter' element={<Painter/>}/>
   
    <Route path='/Electrician' element={<Electrician/>}/>
    <Route path='/Cleaning' element={<Cleaning/>}/>
    
    <Route path='/Service/:userId' element={<Button/>}/>
   

    <Route path='/Message' element={<Message/>}/>

    <Route path='/Workerdetails' element={<Workerdetails/>}/>
    <Route path='Contact' element={<Contact/>}/>
    <Route path='Login' element={<Login/>}/>
    <Route path='Signup' element={<Signup/>}/>
    <Route path='Logout' element={<Logout/>}/>
    <Route path='/Workerlogin' element={<Workerlogin/>}/>
    <Route path='Workerhome' element={<Workerhome/>}/>
   </Routes>

   
   </BrowserRouter>
    </>
   
  );
};

export default App;
