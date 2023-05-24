import React, { useEffect, useState } from 'react';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getDictionary } from '../../middlewares/dictionary';
import { WordFilter } from './components/WordFilter';
import { Pagination } from '../UI/Pagination';
import { Search } from '../UI/Search';
import { Notice } from '../UI/Notice';

export const Dictionary = () => {
  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary);
  const filterLevel = useSelector((state) => state.filterLevel);
  const [searchedValue, setSearchedValue] = useState('');
  const filteredWords = dictionary.filter(
    (word) => word.level === filterLevel || filterLevel === '',
  );
  const filteredDictionary = filteredWords.filter(({ word, translation }) => {
    return (
      word.toLowerCase().includes(searchedValue.toLowerCase()) ||
      translation.toLowerCase().includes(searchedValue.toLowerCase())
    );
  });
  const [currentPage, setCurrentPage] = useState(1);
  const wordsPerPage = 10;

  useEffect(() => {
    dispatch(getDictionary());
  }, [dispatch]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const searchHandler = (value) => {
    setSearchedValue(value);
  };

  const visibleWords = filteredDictionary.slice(
    (currentPage - 1) * wordsPerPage,
    currentPage * wordsPerPage,
  );

  return (
    <div className="dictionary">
      <div className="dictionary__header">
        <p>
          Dictionary (<span>{filteredDictionary.length}</span>)
        </p>
        <div className="dictionary__actions">
          <Search onSearch={searchHandler} />
          <WordFilter onFilterChange={handleFilterChange} />
        </div>
      </div>
      <div className="dictionary__main">
        {(dictionary.length === 0 && <Notice>Your dictionary is empty.</Notice>) ||
          (!filteredDictionary.length && <Notice>No such words...</Notice>)}
        {visibleWords.map((item) => {
          return (
            <div key={item.key}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <b>{item.word}</b>
                  <p style={{ margin: '0' }}>{item.translation}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                  }}
                >
                  <p style={{ margin: '0' }}>{item.level}</p>
                  <p style={{ margin: '0' }}>{item.pos}</p>
                </div>
              </div>
              <div className="dictionary__main_line"> </div>
            </div>
          );
        })}
      </div>
      {filteredDictionary.length ? (
        <Pagination
          wordsPerPage={wordsPerPage}
          currentPage={currentPage}
          totalWords={filteredDictionary.length}
          onPageChange={handlePageChange}
        />
      ) : null}
    </div>
  );
};
