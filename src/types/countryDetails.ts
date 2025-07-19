export interface CountryDetailsProps {
  name: {
    common: string;
    nativeName: {
      [langCode: string]: {
        common: string;
      }
    };
  };
  cca3: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  tld: string[];
  flags: {
    svg: string;
  };
  currencies: {
    [currencyCode: string]: {
      name: string;
    }
  };
  languages: {
    [languageCode: string]: string;
  };
  borders: string[];
  cioc: string;
}


export type RegionFilter = "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania"

export type ThemeColors = "light" | "dark"