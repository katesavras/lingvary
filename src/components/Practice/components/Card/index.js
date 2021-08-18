import React from "react";
import './style.scss'


export const Card = ({cardWords, index, isEnglish}) => {

    return (
        <div className='card'>
            <p key={cardWords[index].key}>{isEnglish ? cardWords[index].eng : cardWords[index].rus}</p>
        </div>
    )
}