import React from "react";
import picture from "./img/pageNotFound.jpg"

export const PageNotFound =()=> {
    return (
        <img src={picture} alt="page not found" className='pageNotFound' style={{width: '100%'}}/>
    )
}