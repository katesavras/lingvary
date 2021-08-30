import React, { useState } from "react";
import "./style.scss";
import { NewWordForm } from "./components/NewWordForm";
import { Words } from "./components/Words";
import { Search } from "./components/Search";
import { useDispatch, useSelector } from "react-redux";
import { removeWord } from "middlewares/words";
import { Notification } from "../UI/Notification";
import { Modal } from "components/UI/Modal";
import { Pagination } from "./components/Pagination";

export const Dictionary = () => {
  const dispatch = useDispatch();
  const words = useSelector((state) => state.words);
  const [keyWord, setKeyWord] = useState("");
  const [searchedValue, setSearchedValue] = useState("");
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isModalShown, setModalShown] = useState(false);
  const [currentDeletedWord, setCurrentDeletedWord] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = 8;

  const filteredWords = words.filter(({ eng, rus }) => {
    return (
      eng.toLowerCase().includes(searchedValue.toLowerCase()) ||
      rus.toLowerCase().includes(searchedValue.toLowerCase())
    );
  });

  const indexOfLastWord = currentPage * wordsPerPage;
  const indexOfFirstWord = indexOfLastWord - wordsPerPage;
  const currentWords = filteredWords.slice(indexOfFirstWord, indexOfLastWord);

  const paginateHandler = (pageNumber) => setCurrentPage(pageNumber);

  const searchHandler = (value) => {
    setSearchedValue(value);
  };

  const openFormHandler = () => {
    setIsFormOpened(true);
  };

  const closeFormHandler = () => {
    setIsFormOpened(false);
  };

  const openModalHandler = (key, eng) => {
    setKeyWord(key);
    setCurrentDeletedWord(eng);
    setModalShown(true);
  };

  const closeModalHandler = () => {
    setModalShown(false);
  };

  const deleteWordHandler = () => {
    dispatch(removeWord(keyWord));
    setModalShown(false);
  };

  const openNotificationHandler = () => {
    setIsNotification(true);
  };

  const closeNotificationHandler = () => {
    setIsNotification(false);
  };

  return (
    <>
      <div className="dictionary__header">
        <button onClick={openFormHandler}>Add word</button>
        <p>
          My dictionary (<span>{words.length}</span>)
        </p>
        <Search onSearch={searchHandler} />
      </div>

      <div className="dictionary__main">
        <Words words={currentWords} onDelete={openModalHandler} />
      </div>

      <p className="noWords">{!filteredWords.length && "No such words..."} </p>

      <div className="dictionary__footer">
        {filteredWords.length ? (
          <Pagination
            wordsPerPage={wordsPerPage}
            totalWords={filteredWords.length}
            paginate={paginateHandler}
          />
        ) : null}
      </div>

      {isFormOpened && (
        <NewWordForm
          onFormClose={closeFormHandler}
          onNotificationOpen={openNotificationHandler}
        />
      )}
      {isModalShown ? (
        <Modal
          title=" "
          onSubmit={deleteWordHandler}
          onCancel={closeModalHandler}
        >
          <p className="dictionary__modal_p">
            Are you sure you want
            <br />
            to delete <strong>{currentDeletedWord}</strong>?
          </p>
        </Modal>
      ) : null}

      {isNotification ? (
        <Notification
          onClose={closeNotificationHandler}
          text="You have just added a word!"
        />
      ) : null}
    </>
  );
};
