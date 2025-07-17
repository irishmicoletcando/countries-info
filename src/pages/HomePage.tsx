import FilterDropdown from '../components/FilterDropdown'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-between px-20 md:flex-row">
        <SearchBar />
        <FilterDropdown />
      </div>
    </div>
  )
}

export default HomePage