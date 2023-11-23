import React from "react";
import logo from '../../../assets/image/logo3.png' 
import dots from '../../../assets/image/3dots.png'
export const Navbar =()=>{
    return(
        <>
          <div className="nav-main">
            <div className="nav-left">
                <img className="logo" src={logo} alt="" />
                <h2>Spark</h2>
            </div>
            <div className="nav-right">
                <img className="dots" src={dots} alt="" />
            </div>
            
          </div>
        
        </>
    )
}