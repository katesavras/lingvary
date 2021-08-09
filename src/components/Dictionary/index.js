import React, {useState} from "react";
import {NewWordForm} from "./NewWordForm";
import {Words} from "./Words";
import {Search} from "./Search";
import {useSelector} from "react-redux";
import './style.scss'

export const Dictionary = () => {
    const words = useSelector((state) => state.words);
    const [isFormOpened, setIsFormOpened] = useState(false);
    const [searchedValue, setSearchedValue] = useState('')

    const searchHandler = (value) => {
        setSearchedValue(value);
    }
    const openFormHandler = () => {
        setIsFormOpened(true);
    }

    const closeFormHandler = () => {
        setIsFormOpened(false);
    };

    const filteredValue = words.filter(({eng, rus}) => {
        return eng.toLowerCase().includes(searchedValue.toLowerCase())
            || rus.toLowerCase().includes(searchedValue.toLowerCase())
    })

    return (
        <div>
            <div className='dictionary__control'>
                <button onClick={openFormHandler}>Add word</button>
                <p>My dictionary (<span>{words.length}</span>)</p>
                <Search onSearch={searchHandler}/>
            </div>
            {isFormOpened && <NewWordForm onFormClose={closeFormHandler}/>}
            <Words words={filteredValue}/>
        </div>
    )
}