import {useDispatch} from "react-redux";
import {removeWord} from "../../../../middlewares/words";

export const Word = ({word: {eng, rus, key}} ) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(removeWord(key))
    }
    return (
        <div>
           <p>{eng}, {rus} <span onClick={handleClick}>&#9746;</span></p>
            <hr/>
        </div>
    )
}
