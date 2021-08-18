import React from "react";
import './style.scss'


export const Switcher = ({onChangeLang}) => {

    const switchEngHandler = () => {
        onChangeLang(true)
    }
    const switchRusHandler = () => {
        onChangeLang(false)
    }

    return (
        <div className="switcher">
            <input onClick={switchEngHandler} type="radio" name="balance" value="yin" id="yin"
                   className="switcher__input switcher__input--yin"
                   checked=""/>
            <label htmlFor="yin" className="switcher__label">english</label>

            <input onClick={switchRusHandler} type="radio" name="balance" value="yang" id="yang"
                   className="switcher__input switcher__input--yang"/>
            <label htmlFor="yang" className="switcher__label">russian</label>
            <span className="switcher__toggle"> </span>
        </div>
    )
}