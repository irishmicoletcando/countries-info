import { useEffect, useState } from "react"
import axios from "axios"
import CountryDetailCard from '../components/CountryDetailCard'
import FilterDropdown from '../components/FilterDropdown'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import type { CountryDetailsProps, RegionFilter } from "../types/countryDetails"

const HomePage: React.FC = () => {
  const [countryDetails, setCountryDetails] = useState<CountryDetailsProps[]>([])
  const [loading, setLoading] = useState(true)
  const [searchValue, setSearchValue] = useState<string>('')
  const [filterValue, setFilterValue] = useState<RegionFilter>("All")

  useEffect(() => {
    setLoading(true)
    const fetchCountryDetails = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all?fields=name,cca3,population,region,capital,flags")
      setCountryDetails((res.data).sort((a: CountryDetailsProps, b: CountryDetailsProps) => a.name.common.localeCompare(b.name.common)))
      setLoading(false)
    }

    fetchCountryDetails()
  }, [])

  const handleFilterChange = (region : RegionFilter) : void => {
    setFilterValue(region)
  }

  const filteredItems = countryDetails.filter((countryDetail) => {
    const matchesFilter = filterValue === "All" ? true : countryDetail.region === filterValue;
    const matchesSearch = countryDetail.name.common.toLowerCase().includes(searchValue.toLowerCase())

    return matchesFilter && matchesSearch
  })
    
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg text-blue-900"></span>
      </div>
    )
  }

  return (
    <div className="mb-20">
      <Navbar />
      <div className="flex flex-col justify-between px-10 mb-10 lg:px-20 gap-y-8 md:gap-y-0 md:flex-row">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        <FilterDropdown handleFilterChange={handleFilterChange} selectedRegion={filterValue}/>
      </div>

      {filteredItems.length === 0 && (
        <div className="">
          <p className="text-center">No country found.</p>
        </div>
      )}
      

      {!loading && filteredItems.length !== 0 && (
        <div className="grid grid-cols-1 gap-10 px-10 mb-5 lg:px-20 md:grid-cols-3 lg:grid-cols-4">
          {filteredItems?.map((countryDetail) => (
            <CountryDetailCard key={countryDetail.cca3} countryDetail={countryDetail}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage