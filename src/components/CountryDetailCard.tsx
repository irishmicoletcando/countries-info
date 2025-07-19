import { Link } from "react-router"
import type { CountryDetailsProps } from "../types/countryDetails"

interface CountryDetail {
  countryDetail: CountryDetailsProps;
}

const CountryDetailCard: React.FC<CountryDetail> = ({ countryDetail }) => {
  return (
    <Link to={`/country/${countryDetail.name.common}`}>
      <div className="bg-grey-50 dark:bg-blue-900 rounded-lg shadow-sm h-80 card hover:shadow-2xl">
        <figure className="max-h-44 md:max-h-32">
          <img
            src={countryDetail.flags.svg}
            alt={countryDetail.name.common} 
            className="object-fill"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{countryDetail.name.common}</h2>
          <div className="flex flex-col gap-y-1">
            <p className="font-semibold">Population: <span className="font-light">{countryDetail.population != null ? (countryDetail.population).toLocaleString() : "N/A"}</span></p>
            <p className="font-semibold">Region: <span className="font-light">{countryDetail.region?.length ? countryDetail.region : "N/A"}</span></p>
            <p className="font-semibold">Capital: <span className="font-light">{countryDetail.capital?.length ? countryDetail.capital : "N/A"}</span></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CountryDetailCard