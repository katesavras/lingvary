import './style.scss'
export const Search = ({onSearch}) => {

  const handleSearch = (e)=> {
    onSearch(e.target.value)
  }

  return (
    <input className='search' placeholder="Search..." type="text" onChange={handleSearch}/>
  )
}