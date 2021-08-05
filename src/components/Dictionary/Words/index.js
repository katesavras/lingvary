import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllWords} from "../../../middlewares/words";
import {Word} from "./Word";

export const Words = () => {
    const words = useSelector((state) => state.words);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllWords())
    }, [])

    return (
        <div>
            {words.map((word) =>{return <Word key={word.id} word={word}/>})}
        </div>
    )
}