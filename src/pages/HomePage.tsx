import { useEffect, useState } from "react"
import axios from "axios"
import CountryDetailCard from '../components/CountryDetailCard'
import FilterDropdown from '../components/FilterDropdown'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import type { CountryDetailsProps } from "../types/countryDetails"

const HomePage: React.FC = () => {
  const [countryDetails, setCountryDetails] = useState<CountryDetailsProps[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchCountryDetails = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all?fields=name,cca3,population,region,capital,flags")
      setCountryDetails((res.data).sort((a: CountryDetailsProps, b: CountryDetailsProps) => a.name.common.localeCompare(b.name.common)))
      console.log(res.data)
      setLoading(false)
    }

    fetchCountryDetails()
  }, [])

  if (loading || !countryDetails) {
    return (
      <span className="loading loading-spinner text-primary"></span>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-between px-10 mb-10 lg:px-20 gap-y-8 md:gap-y-0 md:flex-row">
        <SearchBar />
        <FilterDropdown />
      </div>
      {!loading && (
        <div className="grid grid-cols-1 gap-10 px-10 mb-5 lg:px-20 md:grid-cols-3 lg:grid-cols-4">
          {countryDetails?.map((countryDetail) => (
            <CountryDetailCard key={countryDetail.cca3} countryDetail={countryDetail}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default HomePage