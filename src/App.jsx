
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"

import { Home, Register, Login,Forget_pass } from "./index"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgetpass" element={<Forget_pass />} />

      </Routes>
    </BrowserRouter>
  )
}