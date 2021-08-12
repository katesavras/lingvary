import React from "react";
import {Logo} from "./components/Logo";
import {Navigation} from "./components/Navigation";
import "./style.scss"

export const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <Navigation/>
        </div>
    )
}