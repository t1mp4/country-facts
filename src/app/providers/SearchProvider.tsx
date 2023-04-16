'use client';
import { createContext, useState } from 'react';

export const SearchContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(['', () => null]);

const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useState('');

  return (
    <SearchContext.Provider value={[value, setValue]}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
