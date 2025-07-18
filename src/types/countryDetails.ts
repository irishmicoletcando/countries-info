export interface CountryDetailsProps {
  name: {
    official: string;
  };
  cca3: string;
  nativeName: string;
  population: number;
  region: string;
  capital: string;
  topLevelDomain: string[];
  flags: {
    svg: string;
  };
  currencies: {
    name: string;
  };
  languages: {
    name: string;
  };
  borders: string[];
}
