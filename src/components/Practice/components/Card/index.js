import React from "react";
import './style.scss'
import PropTypes from "prop-types";


export const Card = ({cardWords, index, isEnglish}) => {

    return (
        <div className='card'>
            <p key={cardWords[index].key}>{isEnglish ? cardWords[index].eng : cardWords[index].rus}</p>
        </div>
    )
}
Card.propTypes = {
    index: PropTypes.number,
    cardWords:PropTypes.array,
    isEnglish:PropTypes.bool,
}