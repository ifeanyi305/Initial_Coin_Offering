import React, { useState, useEffect } from 'react';
import { BsSun, BsMoonFill } from 'react-icons/bs';

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };
  return (
    <header className="flex justify-between items-center bg-[#5B11F1] p-4">
      <h1>Logo</h1>
      <div className="flex items-center gap-2">
        <button type="button" onClick={toggleTheme}>
          {theme === 'dark' ? <BsSun /> : <BsMoonFill />}
        </button>
        <button type="button" className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff]">Connect wallet</button>
      </div>
    </header>
  );
};

export default Navbar;
