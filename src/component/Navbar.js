import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { BsSun, BsMoonFill } from 'react-icons/bs';

const Navbar = ({ connect, address }) => {
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
    <>
      <header className="flex justify-between items-center bg-[#5B11F1] p-4">
        <h1>Logo</h1>
        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme}>
            {theme === 'dark' ? <BsSun /> : <BsMoonFill />}
          </button>
          <button
            onClick={connect}
            type="button"
            className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#D9D9D9]"
          >
            {address ? `${address.slice(0, 5)} .... ${address.slice(36)}` : 'Connect wallet'}
          </button>
        </div>
      </header>
    </>
  );
};

Navbar.propTypes = {
  address: PropTypes.string.isRequired,
  connect: PropTypes.func.isRequired,
};
export default Navbar;
