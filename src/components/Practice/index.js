import React, {useEffect, useState} from "react";
import {getAllWords} from "../../middlewares/words";
import {InputWord} from "./components/InputWord";
import {Card} from "./components/Card";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";
import {Switcher} from "./components/Switcher";


export const Practice = () => {
    const cardWords = useSelector((state) => state.words);
    const [wordIndex, setWordIndex] = useState(getRandomInt(cardWords.length))
    const [isMistake, setIsMistake] = useState(false)
    const [isEnglish, setIsEnglish] = useState(true)
    const dispatch = useDispatch();

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    useEffect(() => {
        dispatch(getAllWords())
    }, [dispatch])


    const onRightArrowHandler = (inputValue) => {
        if ((isEnglish && inputValue === cardWords[wordIndex].rus)
            || (!isEnglish && inputValue === cardWords[wordIndex].eng)) {
            setIsMistake(false)
            wordIndex === cardWords.length - 1
                ? setWordIndex(0)
                : setWordIndex(wordIndex + 1)
        } else {
            setIsMistake(true)
            return null
        }
    }

    const onChangeLangHandler = (lang) => {
        setIsEnglish(lang)
    }


    return (
        <div className='practice'>
            <div className='practice__switcher'>
                <Switcher onChangeLang={onChangeLangHandler}/>
            </div>
            {cardWords.length !== 0 &&
            <>
                <Card cardWords={cardWords} index={wordIndex} isEnglish={isEnglish}/>
                <InputWord onRightArrow={onRightArrowHandler}
                           onLeftArrow={isEnglish ? cardWords[wordIndex].rus : cardWords[wordIndex].eng}
                           isMistake={isMistake}/>
            </>
            }
        </div>
    )
}