
export const Search = ({ onSearch }) => {
  const handleSearch = (e) => onSearch(e.target.value);

  return (
    <input placeholder="Search..." type="text" onChange={handleSearch} />
  )
}