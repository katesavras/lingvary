import React, {useState} from "react";
import './style.scss'

export const InputWord = ({onRightArrow, isMistake}) => {
    const [inputValue, setInputValue] = useState(' ')



    const inputHandler = (e) => {
        setInputValue(e.target.value)

    }

    const rightArrowClickHandler = () => {
        onRightArrow(inputValue.trim())
        setInputValue('')
    }

    return (
        <div className='input__wrapper'>
            <span className="arrow">&#9001;</span>
            <input  className ={isMistake ? ' mistake': null}
                    autoFocus
                    type="text"
                    onChange={inputHandler}
                    value={inputValue}/>
            <span className="arrow" onClick={rightArrowClickHandler}>&#9002;</span>
        </div>
    )
}