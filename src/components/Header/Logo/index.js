import React from "react";
import logo from "./img/logo.png"
import "./style.scss"


export const Logo = () => {
    return (
        <div >
            <img src={logo} alt='logo' className='logo'/>
        </div>
    )
}