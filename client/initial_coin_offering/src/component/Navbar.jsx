import React from 'react';
import {useState, useEffect} from 'react'
import { BsSun } from 'react-icons/bs'
import { BsMoonFill } from'react-icons/bs'

const Navbar = () => {
  const [theme, setTheme] = useState(null)
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  return (
    <header className='flex justify-between items-center bg-[#5B11F1] p-4'>
      <h1>Logo</h1>
      <div className="flex items-center gap-2">
        <div onClick={toggleTheme}>
          {theme === 'dark'? <BsSun /> : <BsMoonFill />}
        </div>
        <button className="btn bg-[#D50DA8] p-1 rounded text-[#fff]">Connect wallet</button>
      </div>
    </header>
  );
};

export default Navbar;