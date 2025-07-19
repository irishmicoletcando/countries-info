import { useEffect, useState } from "react"
import BackButton from "../components/BackButton"
import Navbar from "../components/Navbar"
import type { CountryDetailsProps } from "../types/countryDetails"
import axios from "axios"
import { useParams } from "react-router"

const CountryDetailPage: React.FC = () => {
  const [countryInfo, setCountryInfo] = useState<CountryDetailsProps | null>(null)
  const [loading, setLoading] = useState(false)

  const { name } = useParams();

  useEffect(() => {
    setLoading(true)
    const fetchCompleteCountryInfo = async () => {
      const res = await axios.get(`https://restcountries.com/v3.1/name/${encodeURIComponent(name!)}`)
      setCountryInfo(res.data[0])
      console.log(res.data)
      setLoading(false)
    }

    fetchCompleteCountryInfo()
  }, [name])

  if (loading || !countryInfo) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg text-blue-900"></span>
      </div>
    )
  }

  return (
    <div>
      <Navbar />
      <div className="px-10 md:px-15 lg:px-20">
        <BackButton />

        {!loading && (
            <div className="flex flex-row gap-x-20">
              <img src={countryInfo.flags.svg} alt={countryInfo.name.common} className="w-1/2 h-100"/>

              <div className="flex flex-col justify-around">
                <h3 className="text-2xl font-bold tracking-wide">{countryInfo.name.common}</h3>

                <div className="flex flex-row gap-x-20">
                  <div>
                    <p className="font-semibold">Native Name: <span className="font-light">{countryInfo.name.nativeName
                    ? Object.values(countryInfo.name.nativeName)[0].common
                    : "N/A"}</span></p>
                    <p className="font-semibold">Population: <span className="font-light">{countryInfo.population != null ? (countryInfo.population).toLocaleString() : "N/A"}</span></p>
                    <p className="font-semibold">Region: <span className="font-light">{countryInfo.region?.length ? countryInfo.region : "N/A"}</span></p>
                    <p className="font-semibold">Sub Region: <span className="font-light">{countryInfo.subregion?.length ? countryInfo.subregion : "N/A"}</span></p>
                    <p className="font-semibold">Capital: <span className="font-light">{countryInfo.capital?.length ? countryInfo.capital : "N/A"}</span></p>
                  </div>

                  <div>
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

                <div className="flex flex-row gap-x-5 items-center">
                  <p className="font-semibold">Border Countries:</p>
                  {countryInfo.borders && countryInfo.borders.length > 0 ? (
                    <div className="grid grid-cols-4 gap-x-5 gap-y-2">
                      {countryInfo.borders.map((border) => (
                        <div key={border} className="bg-blue-900 border border-gray-950 px-4 py-1 text-sm rounded text-white">
                          {border}
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