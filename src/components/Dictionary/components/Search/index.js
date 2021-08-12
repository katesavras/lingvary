import './style.scss'
import PropTypes from "prop-types";

export const Search = ({onSearch}) => {

  const handleSearch = (e)=> {
    onSearch(e.target.value)
  }

  return (
    <input className='search' placeholder="Search..." type="text" onChange={handleSearch}/>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func,
}