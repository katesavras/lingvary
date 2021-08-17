import React, {useEffect, useState} from "react";
import {getAllWords} from "../../middlewares/words";
import {InputWord} from "./components/InputWord";
import {Card} from "./components/Card";
import './style.scss'
import {useDispatch, useSelector} from "react-redux";


export const Practice = () => {
    const cardWords = useSelector((state) => state.words);
    const [wordIndex, setWordIndex] = useState(0)
    const [isMistake, setIsMistake] = useState(false)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllWords())
    }, [dispatch])


    const onRightArrowHandler = (inputValue) => {
        console.log(inputValue)
        console.log(cardWords[wordIndex].rus)
        if (inputValue === cardWords[wordIndex].rus){
            console.log('true')
            setIsMistake(false)
            if (wordIndex === cardWords.length - 1) {
                return setWordIndex(0)
            } else {
                return setWordIndex(wordIndex + 1)
            }
        }else {
            console.log('false')
            setIsMistake(true)
            return null
        }
    }
    return (

        <div className='card__wrapper'>
            {cardWords.length !== 0 &&
            <>
                <Card cardWords={cardWords} index={wordIndex}/>
                <InputWord onRightArrow={onRightArrowHandler} isMistake={isMistake}/>
            </>
            }
        </div>
    )
}