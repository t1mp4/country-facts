import type { Country } from '@/types/country';
import data from '../../countries.json';

export const getStaticCountries = async (): Promise<Country[]> => {
  // const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital,subregion,tld,currencies,languages,independent');

  const countries = data.filter(country => country.independent);

  // @ts-ignore
  return countries.sort((a, b) => {
    if (a.population > b.population) return -1;
    if (a.population < b.population) return 1;
    return 0;
  });
};

export const sortCountriesBySearchAccuracy = (
  countries: Country[],
  search: string
) => {
  return [...countries].sort((a, b) => {
    const aMatch = a.name.common.toLowerCase().includes(search);
    const bMatch = b.name.common.toLowerCase().includes(search);

    if (!aMatch && !bMatch) return 0;
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return 1;

    const aStarts = a.name.common.toLowerCase().startsWith(search);
    const bStarts = b.name.common.toLowerCase().startsWith(search);

    if (aStarts && !bStarts) return -1;
    if (!aStarts && bStarts) return 1;
    if (a.name.common.length < b.name.common.length) return -1;
    if (a.name.common.length > b.name.common.length) return 1;

    return 0;
  });
};

export const cn = {
  applyIf: (condition: boolean, className: string) => {
    return condition ? ' ' + className : '';
  },
};
