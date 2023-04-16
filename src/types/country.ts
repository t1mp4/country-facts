export type Country = {
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  tld: string[];
  independent?: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  capital: string[];
  region: 'Americas' | 'Africa' | 'Oceania' | 'Europe' | 'Asia' | 'Antarctic';
  subregion: string;
  languages: { [key: string]: string };
  population: number;
};
