import React, { useState } from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { Modal } from 'components/UI/Modal';
import { removeWord } from 'middlewares/words';
import { useDispatch } from 'react-redux';

export const Word = ({ word: { eng, rus, id, key } }) => {
  const [isModalShown, setModalShown] = useState(false);
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    setModalShown(false);
  };

  const deleteWordHandler = () => {
    dispatch(removeWord(key));
    setModalShown(false);
  };

  const handleClick = () => {
    setModalShown(true);
  };

  return (
    <>
      {isModalShown ? (
        <Modal title=" " onSubmit={deleteWordHandler} onCancel={closeModalHandler}>
          <p className="dictionary__modal_p">
            Are you sure you want
            <br />
            to delete <strong>{eng}</strong>?
          </p>
        </Modal>
      ) : null}
      <div className="word">
        <p className="word__eng">{eng}</p>
        <p className="word__rus">{rus}</p>
        <span className="word__del" onClick={handleClick}>
          &#10005;
        </span>
      </div>
      <div className="word__line"> </div>
    </>
  );
};

Word.propTypes = {
  word: PropTypes.object.isRequired,
};
