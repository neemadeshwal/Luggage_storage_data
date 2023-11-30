import React from "react";
import { Link } from "react-router-dom";
import E_404_img from "./Assets/main-404.png"
export default function Error_404(){
    return(
        <div className="E-404-container">
            <img className="E-404-img" src={E_404_img} alt="404-page"/>
           
            <h3 className="E-404-title">Oops!<span><p className="E-404-text">Page not found!</p></span></h3>

           <Link to="/" >
           <button className="home-link">Back to home</button>
            </Link>

        </div>
    )
}