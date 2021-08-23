import React, {useState} from "react";
import './style.scss'
import PropTypes from "prop-types";



export const Pagination = ({wordsPerPage, totalWords, paginate}) => {
    const [activePage, setIsActivePage] = useState(1)

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalWords / wordsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <div className='pages'>
                {pageNumbers.map(page => (
                        <button key={page} className={activePage === page ? 'page active' : 'page'}
                                onClick={()=> {
                                setIsActivePage(page)
                                paginate(page)}
                                }>{page}</button>
                   )
                )
                }
            </div>
        </>
    )
}
Pagination.propTypes = {
    wordsPerPage:PropTypes.number,
    totalWords:PropTypes.number,
    paginate: PropTypes.func,
}