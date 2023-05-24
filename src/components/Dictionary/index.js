import React, { useState } from 'react';
import './style.scss';
import { NewWordForm } from './components/NewWordForm';
import { Words } from './components/Words';
import {Search} from "../UI/Search";
import { useSelector } from 'react-redux';
import { Notification } from 'components/UI/Notification';
import {Pagination} from "../UI/Pagination";
import { Notice } from 'components/UI/Notice';

export const Dictionary = () => {
  const words = useSelector((state) => state.words);
  const [searchedValue, setSearchedValue] = useState('');
  const [isFormOpened, setIsFormOpened] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = 10;

  const filteredWords = words.filter(({ eng, rus }) => {
    return (
      eng.toLowerCase().includes(searchedValue.toLowerCase()) ||
      rus.toLowerCase().includes(searchedValue.toLowerCase())
    );
  });

  const visibleWords = filteredWords.slice(
      (currentPage - 1) * wordsPerPage,
      currentPage * wordsPerPage
  );

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="dictionary">
      <div className="dictionary__header">
        <p>
          Dictionary (<span>{words.length}</span>)
        </p>
        <div>
          <Search onSearch={searchHandler} />
          <button onClick={openFormHandler}>Add word</button>
        </div>
      </div>


      <div className="dictionary__main">
        {(words.length === 0 && <Notice>Your dictionary is empty.</Notice>) ||
            (!filteredWords.length && <Notice>No such words...</Notice>)}
        <Words words={visibleWords} />
      </div>

      <div className="dictionary__footer">
        {filteredWords.length ? (
            <Pagination
                wordsPerPage={wordsPerPage}
                currentPage={currentPage}
                totalWords={filteredWords.length}
                onPageChange={handlePageChange}
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
    </div>
  );
};
