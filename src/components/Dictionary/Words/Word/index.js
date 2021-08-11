import './style.scss'


export const Word = ({word: {eng, rus, id, key}, onDelete}) => {

    const handleClick = () => {
        onDelete(key)
    }

    return (
        <div className='word__wrapper'>
            <div className='word'>
                <input type="checkbox" id={id} name="word"/>
                <p className='word__eng'>{eng}</p>
                <p className='word__rus'>{rus}</p>
                <span className='word__del' onClick={handleClick}>&#10005;</span>
            </div>
            <hr className='line'/>
        </div>
    )
}
