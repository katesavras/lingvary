import React, {useState} from "react";
import {NewWordForm} from "./NewWordForm";
import {Words} from "./Words";
import {Search} from "./Search";
import {useSelector} from "react-redux";
import './style.scss'
import {NotificationComponent} from "./Notification";


export const Dictionary = () => {
    const words = useSelector((state) => state.words);
    const [isFormOpened, setIsFormOpened] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
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

    const openNotificationHandler = () => {
        setIsNotification(true);
    };
    const closeNotificationHandler = () => {
        setIsNotification(false);
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
            {isFormOpened && <NewWordForm onFormClose={closeFormHandler} isNotification={openNotificationHandler}/>}
            <Words words={filteredValue}/>
            {isNotification ? <NotificationComponent onClose={closeNotificationHandler}/> : null}
        </div>
    )
}