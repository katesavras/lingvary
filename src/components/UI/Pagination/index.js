import React, {useState} from 'react';
import './index.scss';
import PropTypes from "prop-types";

export const Pagination = ({ totalWords, wordsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalWords / wordsPerPage);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const page = parseInt(inputValue, 10);

        if (page >= 1 && page <= totalPages) {
            onPageChange(page);
            setInputValue('');
        }
    };

    const handlePreviousClick = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="pagination">
            <div>
                <button className="pagination__button" onClick={handlePreviousClick} disabled={currentPage === 1}>
                    Previous
                </button>
                <span className="pagination__text">{currentPage}</span> / <span className="pagination__text">{totalPages}</span>
                <button className="pagination__button" onClick={handleNextClick} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
            <form className="pagination__form" onSubmit={handleSubmit}>
                <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Go</button>
            </form>
        </div>
    );
};


Pagination.propTypes = {
    wordsPerPage: PropTypes.number.isRequired,
    totalWords: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

