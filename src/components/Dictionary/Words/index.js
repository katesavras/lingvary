import React from "react";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getAllWords} from "../../../middlewares/words";
import {Word} from "./Word";

export const Words = ({words}) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllWords())
    }, [dispatch])

    return (
        <div>
            {words.map((word) =>{return <Word key={word.id} word={word}/>})}
        </div>
    )
}