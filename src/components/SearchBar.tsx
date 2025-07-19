interface SearchInputProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchInputProps> = ({searchValue, setSearchValue}) => {
  return (
    <div>
      <label className="bg-blue-900 input">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input 
          type="search" 
          className="grow" 
          placeholder="Search for a country..." 
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </label>
    </div>
  )
}

export default SearchBar