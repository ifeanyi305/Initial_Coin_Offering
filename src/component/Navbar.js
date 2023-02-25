import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import easylaunch from '../images/easylaunch.png';

const Navbar = ({ connect, address }) => {
  const style = {
    padding: 'px-4 text-[#fff]',
  };
  const [theme, setTheme] = useState(null);
  const [toggle, setactive] = useState(false);

  const toggleNav = () => {
    setactive(!toggle);
  };

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
      <header className="flex sticky z-50 w-full top-0 flex-wrap justify-between items-center bg-[#5B11F1] p-4">
        <img src={easylaunch} alt="Easy Launch" height={24} width={102} />
        <div className="flex items-center gap-2">
          <ul className="nav md:flex items-center flex-wrap">
            <li className={style.padding}><Link to="/">Home</Link></li>
            <li className={style.padding}><Link to="/ico-list">ICO List</Link></li>
            <li className={style.padding}><Link to="/CreateICO">Create ICO</Link></li>
            <li className={style.padding}><Link to="/dashboard">Dashboard</Link></li>
            <li className={style.padding}><Link to="/faq">FAQ</Link></li>
            {/* <li className={style.padding}><Link to="/AdminDashboard">Admin</Link></li> */}
          </ul>
          <ul className={toggle ? 'ul' : 'ulOff'}>
            {/* eslint-disable-next-line */}
            <li onClick={toggleNav} className={style.padding}><Link to="/">Home</Link></li>
            {/* eslint-disable-next-line */}
            <li onClick={toggleNav} className={style.padding}><Link to="/ico-list">ICO List</Link></li>
            {/* eslint-disable-next-line */}
            <li onClick={toggleNav} className={style.padding}><Link to="/CreateICO">Create ICO</Link></li>
            {/* eslint-disable-next-line */}
            <li onClick={toggleNav} className={style.padding}><Link to="/dashboard">Dashboard</Link></li>
            {/* eslint-disable-next-line */}
            <li onClick={toggleNav} className={style.padding}><Link to="/faq">FAQ</Link></li>
          </ul>
          <button
            onClick={connect}
            type="button"
            className="bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#D9D9D9]"
          >
            {address ? `${address.slice(0, 5)} .... ${address.slice(36)}` : 'Connect wallet'}
          </button>
          <button type="button" onClick={toggleTheme}>
            {theme === 'dark' ? <BsSun /> : <BsMoonFill />}
          </button>
          <div>
            <button className="sm:hidden" type="button" onClick={toggleNav}>
              <GiHamburgerMenu />
            </button>
          </div>
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
