import React from 'react';

const Navbar = () => {
  return (
    <header className='flex justify-between items-center bg-[#5B11F1] p-4'>
      <h1>Logo</h1>
      <button className="btn bg-[#D50DA8] p-1 rounded text-[#fff]">Connect wallet</button>
    </header>
  );
};

export default Navbar;