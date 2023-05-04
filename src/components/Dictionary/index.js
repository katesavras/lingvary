import React, { useState } from 'react';
import './style.scss';
import { NewWordForm } from './components/NewWordForm';
import { Words } from './components/Words';
import { Search } from './components/Search';
import { useSelector } from 'react-redux';
import { Notification } from 'components/UI/Notification';
import { Pagination } from './components/Pagination';
import { Notice } from 'components/UI/Notice';

export const Dictionary = () => {
  const words = useSelector((state) => state.words);
  const [searchedValue, setSearchedValue] = useState('');
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
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
        {(words.length === 0 && <Notice>Your dictionary is empty.</Notice>) ||
            (!filteredWords.length && <Notice>No such words...</Notice>)}
        <Words words={currentWords} />
      </div>

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
          onWordAdded={openNotificationHandler}
        />
      )}

      {isNotification ? (
        <Notification
          onClose={closeNotificationHandler}
          text="You have just added a word!"
        />
      ) : null}
    </>
  );
};
