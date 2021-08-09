import {useState, useCallback} from "react";
import {Modal} from "../../UI/Modal";
import {useDispatch} from "react-redux";
import {createWords} from "../../../middlewares/words";

export const NewWordForm = ({onFormClose}) => {
    const [engWord, setEngWord] = useState('')
    const [rusWord, setRusWord] = useState('')
    const dispatch = useDispatch()

    const engWordInputHandler = (e) => setEngWord(e.target.value);
    const rusWordInputHandler = (e) => setRusWord(e.target.value);

    const addNewWord = useCallback(() => {
        if (!engWord) return engWord;
        if (!rusWord) return rusWord;

    dispatch(createWords(
        engWord[0].toLowerCase() + engWord.slice(1),
        rusWord[0].toLowerCase() + rusWord.slice(1))
    );

        setEngWord('')
        setRusWord('')

    }, [dispatch, engWord, rusWord]);

    return (
        <Modal
            title="Add new word"
            onCancel={onFormClose}
            onSubmit={addNewWord}
        >
            <form className="word__form">
                <input
                    type="text"
                    placeholder="English..."
                    onChange={engWordInputHandler}
                    value={engWord}
                />
                <input
                    type="text"
                    placeholder="Russian..."
                    onChange={rusWordInputHandler}
                    value={rusWord}
                />
            </form>
        </Modal>
    )
}