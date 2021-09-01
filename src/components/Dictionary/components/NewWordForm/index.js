import React, { useCallback, useState } from 'react';
import { Modal } from 'components/UI/Modal';
import { useDispatch } from 'react-redux';
import { createWords } from 'middlewares/words';
import './style.scss';
import PropTypes from 'prop-types';

export const NewWordForm = ({ onFormClose, onWordAdded }) => {
  const [engWord, setEngWord] = useState('');
  const [rusWord, setRusWord] = useState('');
  const dispatch = useDispatch();

  const engWordInputHandler = (e) => setEngWord(e.target.value);
  const rusWordInputHandler = (e) => setRusWord(e.target.value);

  const addNewWord = useCallback(() => {

    if (!isNaN(engWord) || !isNaN(rusWord)){ return }

    if (!engWord || !rusWord){ return }

    dispatch(
      createWords(
        engWord[0].toLowerCase() + engWord.slice(1),
        rusWord[0].toLowerCase() + rusWord.slice(1),
      ),
    );

    setEngWord('');
    setRusWord('');

    onWordAdded();
  }, [dispatch, engWord, rusWord, onWordAdded]);

  return (
    <Modal title="Add new word" onCancel={onFormClose} onSubmit={addNewWord}>
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
  );
};

NewWordForm.propTypes = {
  onFormClose: PropTypes.func.isRequired,
  onWordAdded: PropTypes.func.isRequired,
};
