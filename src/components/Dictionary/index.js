import React, {useState} from "react";
import {NewWordForm} from "./NewWordForm";
import {Words} from "./Words";
import {Search} from "./Search";
import {useDispatch, useSelector} from "react-redux";
import './style.scss'
import {NotificationComponent} from "./Notification";
import {removeWord} from "../../middlewares/words";
import {Modal} from "../UI/Modal";


export const Dictionary = () => {
    const dispatch = useDispatch()
    const words = useSelector((state) => state.words);
    const [keyWord, setKeyWord] = useState('');
    const [searchedValue, setSearchedValue] = useState('');
    const [isFormOpened, setIsFormOpened] = useState(false);
    const [isNotification, setIsNotification] = useState(false);
    const [isModalShown, setModalShown] = useState(false);


    const searchHandler = (value) => {
        setSearchedValue(value)
    }

    const filteredValue = words.filter(({eng, rus}) => {
        return eng.toLowerCase().includes(searchedValue.toLowerCase())
            || rus.toLowerCase().includes(searchedValue.toLowerCase())
    })

    const openFormHandler = () => {
        setIsFormOpened(true)
    }

    const closeFormHandler = () => {
        setIsFormOpened(false)
    }

    const openModalHandler = (key) => {
        setKeyWord(key)
        setModalShown(true)
    }

    const closeModalHandler = () => {
        setModalShown(false)
    }

    const deleteWordHandler = () => {
        dispatch(removeWord(keyWord))
        setModalShown(false)
    }

    const openNotificationHandler = () => {
        setIsNotification(true)
    }

    const closeNotificationHandler = () => {
        setIsNotification(false)
    }

    return (
        <>
            <div className='dictionary__control'>
                <button onClick={openFormHandler}>Add word</button>
                <p>My dictionary (<span>{words.length}</span>)</p>
                <Search onSearch={searchHandler}/>
            </div>

            {isFormOpened && <NewWordForm onFormClose={closeFormHandler} isNotification={openNotificationHandler}/>}

            <Words words={filteredValue} onDelete={openModalHandler}/>

            {isModalShown
                ? <Modal title=' '
                         onSubmit={deleteWordHandler}
                         onCancel={closeModalHandler}>
                    <p className='modal__dictionary_p'>Are you sure you want <br/> to delete this word?</p>
                </Modal>
                : null
            }

            {isNotification ?
                <NotificationComponent onClose={closeNotificationHandler}/>
                : null
            }
        </>
    )
}