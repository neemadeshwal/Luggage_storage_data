
import React from "react";
import { BrowserRouter, Route, Routes,Navigate } from "react-router-dom"
import "./index.css"

import { Home, Register, Login,Forget_pass,Error_404 } from "./index"
export default function App() {
  let loggedIn=false
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={`${loggedIn?"/":"/login"}`} element={loggedIn?<Home/>:<Login/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpass" element={<Forget_pass />} />
        <Route path="*" element={<Error_404/>}/>

      </Routes>
    </BrowserRouter>
  )
}