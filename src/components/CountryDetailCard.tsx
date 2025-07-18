
import { Link } from "react-router"

const CountryDetailCard = ({ countryDetail }) => {
  return (
    <Link to="">
      <div className="bg-blue-900 rounded-lg shadow-sm h-80 card hover:shadow-2xl">
        <figure className="max-h-44 md:max-h-32">
          <img
            src={countryDetail.flags.svg}
            alt={countryDetail.name.official} 
            className="object-fill"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{countryDetail.name.official}</h2>
          <div className="flex flex-col gap-y-1">
            <p className="font-semibold">Population: <span className="font-light">{countryDetail.population}</span></p>
            <p className="font-semibold">Region: <span className="font-light">{countryDetail.region}</span></p>
            <p className="font-semibold">Capital: <span className="font-light">{countryDetail.capital}</span></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CountryDetailCard