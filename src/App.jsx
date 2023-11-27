
import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"

import {Home,Register,Login} from "./index"
export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>

    </Routes>
    </BrowserRouter>

  
  )
}