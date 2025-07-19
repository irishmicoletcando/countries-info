import { useEffect, useState } from "react"
import BackButton from "../components/BackButton"
import Navbar from "../components/Navbar"
import type { CountryDetailsProps } from "../types/countryDetails"
import axios from "axios"
import { useParams } from "react-router"

const CountryDetailPage: React.FC = () => {
  const [countryInfo, setCountryInfo] = useState<CountryDetailsProps | null>(null)
  const [loading, setLoading] = useState(false)
  const [allCountries, setAllCountries] = useState<CountryDetailsProps[]>([])

  const { name } = useParams();

  useEffect(() => {
    setLoading(true)
    const fetchCompleteCountryInfo = async () => {
      const res = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(name!)}`)
      setCountryInfo(res.data[0])
      setLoading(false)
    }

    fetchCompleteCountryInfo()
  }, [name])

  useEffect(() => {
    const fetchAllCountries = async () => {
      const res = await axios.get("https://restcountries.com/v3.1/all?fields=name,cca3")
      setAllCountries(res.data)
    }
    fetchAllCountries()
  }, [])

  const getCountryNameByCode = (code: string) => {
    const found = allCountries.find(
      (country) => country.cca3 === code || country.cioc === code
    )
    return found ? found.name.common : code
  }

  if (loading || !countryInfo || allCountries.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg text-blue-900"></span>
      </div>
    )
  }

  return (
    <div className="mb-10 lg:mb-0 lg:overflow-y-hidden">
      <Navbar />
      <div className="px-10 md:px-15 lg:px-20">
        <BackButton />

        {!loading && (
            <div className="flex flex-col lg:flex-row gap-x-10 gap-y-10">
              <img src={countryInfo.flags.svg} alt={countryInfo.name.common} className="object-contain w-full lg:w-1/2 h-100"/>

              <div className="flex flex-col gap-y-5 justify-center">
                <h3 className="text-2xl font-bold tracking-wide">{countryInfo.name.common}</h3>

                <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-x-20">
                  <div className="flex flex-col gap-y-2">
                    <p className="font-semibold">Native Name: <span className="font-light">{countryInfo.name.nativeName
                    ? Object.values(countryInfo.name.nativeName)[0].common
                    : "N/A"}</span></p>
                    <p className="font-semibold">Population: <span className="font-light">{countryInfo.population != null ? (countryInfo.population).toLocaleString() : "N/A"}</span></p>
                    <p className="font-semibold">Region: <span className="font-light">{countryInfo.region?.length ? countryInfo.region : "N/A"}</span></p>
                    <p className="font-semibold">Sub Region: <span className="font-light">{countryInfo.subregion?.length ? countryInfo.subregion : "N/A"}</span></p>
                    <p className="font-semibold">Capital: <span className="font-light">{countryInfo.capital?.length ? countryInfo.capital : "N/A"}</span></p>
                  </div>

                  <div className="flex flex-col gap-y-2">
                    <p className="font-semibold">Top Level Domain: <span className="font-light">{countryInfo.tld?.length ? countryInfo.tld : "N/A"}</span></p>
                    <p className="font-semibold">
                      Currencies:{" "}
                      <span className="font-light">
                        {Object.values(countryInfo.currencies)
                          .map((currency) => currency.name)
                          .join(", ")}
                      </span>
                    </p>
                    <p className="font-semibold">
                      Languages:{" "}
                      <span className="font-light">
                        {Object.values(countryInfo.languages).join(", ")}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-x-5 gap-y-3">
                  <p className="font-semibold">Border Countries:</p>
                  {countryInfo.borders && countryInfo.borders.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-2">
                      {countryInfo.borders.map((border) => (
                        <div key={border} className="bg-blue-900 border border-gray-950 px-4 py-1 text-sm rounded text-white text-center">
                          {getCountryNameByCode(border)}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <span className="font-light">None</span>
                  )}
                </div>
              </div>
            </div>
        )}
      </div>
    </div>
  )
}

export default CountryDetailPage