import { useEffect, useState } from "react"
import axios from "axios"
import CountryDetailCard from '../components/CountryDetailCard'
import FilterDropdown from '../components/FilterDropdown'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'

const HomePage = () => {
  const [countryDetails, setCountryDetails] = useState<[] | null>([])

  useEffect(() => {
    const fetchCountryDetails = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all?fields=name,population,region,capital,flags")
      setCountryDetails(res.data)
      console.log(res.data)
    }

    fetchCountryDetails()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-between px-20 md:flex-row">
        <SearchBar />
        <FilterDropdown />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {countryDetails?.map((countryDetail) => (
          <CountryDetailCard countryDetail={countryDetail}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage