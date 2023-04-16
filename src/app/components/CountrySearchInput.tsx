'use client';
import { useContext } from 'react';
import { SearchContext } from '../providers/SearchProvider';

const CountrySearchInput = () => {
  const [value, setValue] = useContext(SearchContext);

  return (
    <input
      type="text"
      placeholder="Search for a country…"
      className="w-full text-xs placeholder:text-[#C4C4C4]"
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
};

export default CountrySearchInput;
