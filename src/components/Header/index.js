import React from "react";
import {Logo} from "./Logo";
import {Navigation} from "./Navigation";
import "./style.scss"

export const Header = () => {
    return (
        <div className='header'>
            <Logo/>
            <Navigation/>
        </div>
    )
}