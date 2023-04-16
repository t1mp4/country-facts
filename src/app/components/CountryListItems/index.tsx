'use client';
import { useContext, useState } from 'react';
import { sortCountriesBySearchAccuracy } from '@/lib';
import { SearchContext } from '@/app/providers/SearchProvider';
// import ListItemClientWrapper from './ListItemClientWrapper';
import ListItem from './ListItem';
import type { Country } from '@/types/country';

const CountryListItems = ({ countries }: { countries: Country[] }) => {
  const [hello, setHello] = useState('This should not work?');
  const [search] = useContext(SearchContext);

  const filteredCountries =
    search.length === 0
      ? countries
      : sortCountriesBySearchAccuracy(countries, search.toLowerCase());

  return (
    <>
      <div className="text-4xl font-extrabold">{hello}</div>
      {filteredCountries.map(country => (
        <ListItem country={country} key={country.name.common} />
      ))}
    </>
  );
};

export default CountryListItems;
