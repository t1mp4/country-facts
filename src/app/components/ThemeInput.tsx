'use client';
import { useState, useEffect } from 'react';

const ThemeInput = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    document.documentElement.setAttribute(
      'data-theme',
      checked ? 'light' : 'dark'
    );

    localStorage.setItem('theme', checked ? 'light' : 'dark');
    setChecked(prevState => !prevState);
  };

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setChecked(true);
    }
  }, []);

  return (
    <input
      type="checkbox"
      className="sr-only"
      checked={checked}
      onChange={handleChange}
      aria-label="Dark mode activated"
    />
  );
};

export default ThemeInput;
