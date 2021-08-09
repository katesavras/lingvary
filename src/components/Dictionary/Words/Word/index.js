import {useDispatch} from "react-redux";
import {removeWord} from "../../../../middlewares/words";
import './style.scss'

export const Word = ({word: {eng, rus, key}}) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(removeWord(key))
    }
    return (
        <div>
            <div className='word'>
                <p className='word__eng'>{eng}</p>
                <p className='word__rus'>{rus}</p>
                <span className='word__del' onClick={handleClick}>&#10005;</span>
            </div>
            <hr className='line'/>
        </div>
    )
}
