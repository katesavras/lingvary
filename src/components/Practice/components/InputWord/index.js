import React, {useState} from "react";
import './style.scss'

export const InputWord = ({onRightArrow, onLeftArrow, isMistake}) => {
    const [inputValue, setInputValue] = useState(' ')

    const inputHandler = (e) => {
        setInputValue(e.target.value)
    }

    const rightArrowClickHandler = () => {
        onRightArrow(inputValue.trim())
        setInputValue('')
    }
    const leftArrowClickHandler = () => {
         setInputValue(onLeftArrow)
    }

    return (
        <div className='input__wrapper'>
            <span className="arrow" onClick={leftArrowClickHandler}> ? </span>
            <input  className ={isMistake ? ' mistake' : null}
                    autoFocus
                    type="text"
                    onChange={inputHandler}
                    value={inputValue}/>
            <span className="arrow" onClick={rightArrowClickHandler}>&#9002;</span>
        </div>
    )
}