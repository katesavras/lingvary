import React from "react";
import './style.scss'
import PropTypes from "prop-types";


export const Switcher = ({onChangeLang}) => {

    const switchEngHandler = () => {
        onChangeLang(true)
    }
    const switchRusHandler = () => {
        onChangeLang(false)
    }

    return (
        <div className="switcher">
            <input onClick={switchEngHandler} type="radio" name="language" value="eng" id="eng"
                   className="switcher__input"
                   checked="" readOnly/>
            <label htmlFor="eng" className="switcher__label">english</label>
            <input onClick={switchRusHandler} type="radio" name="language" value="rus" id="rus"
                   className="switcher__input switcher__input_rus"/>
            <label htmlFor="rus" className="switcher__label">russian</label>
            <span className="switcher__toggle"> </span>
        </div>
    )
}
Switcher.prototype={
    onChangeLang: PropTypes.func,
}