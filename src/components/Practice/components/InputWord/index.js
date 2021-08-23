import React, {useEffect, useState} from "react";
import './style.scss'
import PropTypes from "prop-types";


export const InputWord = ({onRightArrow, onLeftArrow, isMistake}) => {
    const [inputValue, setInputValue] = useState(' ')

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }

    const rightArrowClickHandler = () => {
        console.log(inputValue)
        onRightArrow(inputValue.trim())
        setInputValue('')
        console.log("уыскмпу")
    }
    const leftArrowClickHandler = () => {
         setInputValue(onLeftArrow)
    }

    return (
        <div className='input__wrapper'>
            <span className="arrow" onClick={leftArrowClickHandler}>&#63;</span>
            <input  className = {isMistake ? ' mistake' : null}
                    autoFocus
                    type="text"
                    onChange={inputHandler}
                    value={inputValue}/>
            <span className="arrow" onClick={rightArrowClickHandler}>&#9002;</span>
        </div>
    )
}

InputWord.propTypes = {
    onRightArrow: PropTypes.func,
    onLeftArrow:PropTypes.string,
    isMistake:PropTypes.bool,
}