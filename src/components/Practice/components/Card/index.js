import React from "react";
import './style.scss'


export const Card = ({cardWords, index}) => {

    return (
        <div className='card'>
           <span>?</span>
            <p key={cardWords[index].key}>{cardWords[index].eng}</p>
        </div>
    )
}