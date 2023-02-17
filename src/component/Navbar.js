import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { useStateContext } from '../context';

// import { ethers } from 'ethers';

const Navbar = () => {
  const [theme, setTheme] = useState(null);
  const [address, setAddress] = useState(null);

  const { connectWallet, buyICO } = useStateContext();

  const connect = async () => {
    if (window.ethereum) {
      const accounts = await connectWallet();
      setAddress(accounts[0]);

      toast.success('Wallet connected successfuly', {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      toast.info('Please install Metamask');
    }
    console.log('fir', await buyICO());
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

export default Navbar;
