import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useStateContext } from './context';
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './component/Navbar';
import IcoList from './pages/IcoList';
import CreateICO from './pages/CreateICO';
import Footer from './component/Footer';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [address, setAddress] = useState('');

  const { connectWallet } = useStateContext();

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
    // console.log('fir', await buyICO());
  };
  return (
    <>
      <body className="dark:bg-[#181A1B]">
        <Navbar
          address={address}
          connect={connect}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ico-list" element={<IcoList />} />
          <Route path="/details" element={<Details />} />
          <Route path="/CreateICO" element={<CreateICO address={address} />} />
        </Routes>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Footer />
      </body>
    </>
  );
};

export default App;
