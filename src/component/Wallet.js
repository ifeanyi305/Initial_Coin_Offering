import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { useStateContext } from '../context';

const Wallet = ({ ICO, address }) => {
  const [buyAmount, setBuyAmount] = useState(0);
  const [ETHBal, setETHBal] = useState(0);
  const [ICOTokenBal, setICOTokenBal] = useState(0);
  const {
    endDate, startDate, AmountToRaise, AmountRaised, tokenAddress, tokenSymbol, IcoAddress,
  } = ICO;

  const { getUserICOTokenBal, getEthBal, buyICO } = useStateContext();
  const getICOStatus = () => {
    const currentDate = new Date().toJSON().slice(0, 10);

    if (currentDate < startDate) {
      return 'ICO Starts In';
    } if (currentDate > startDate && currentDate < endDate) {
      return 'ICO Ends in';
    } if (currentDate > endDate) {
      return 'ICO Ended';
    }

    return 'Checking...';
  };

  const buyTokenICO = async (e) => {
    e.preventDefault();

    const data = await buyICO(IcoAddress, buyAmount);
    console.log(data);
    return data;
  };

  const getEthBalance = async (addr) => {
    const data = await getEthBal(addr);
    setETHBal(Number(data).toFixed(3));
    return data;
  };

  const getTokenBalance = async (tokenAddr, userAddr) => {
    const data = await getUserICOTokenBal(tokenAddr, userAddr);
    setICOTokenBal(Number(data).toFixed(2));
    return data;
  };

  useEffect(() => {
    if (address !== '' && tokenAddress !== undefined) {
      getEthBalance(address);
      getTokenBalance(tokenAddress, address);
    }
  }, [tokenAddress, address]);

  // console.log(ETHBal, ICOTokenBal);
  return (
    <>
      <div className="text-center">
        <h2 className="font-extrabold dark:text-[#fff]">{getICOStatus()}</h2>
        <span className="bg-[#5B11F1] p-1 rounded-full">00:04:10:50</span>
      </div>
      <div className="flex justify-between item-center">
        <p className="text-[#D50DA8]">{` ${AmountRaised} ETH`}</p>
        <p className="text-[#D50DA8]">{` ${AmountToRaise} ETH`}</p>
      </div>
      <div className="mb-4 flex flex-col items-center w-full">
        <input
          type="number"
          className="block my-4 bg-[#fffff] border-2 w-100 p-2 rounded-full border-[#D50DA8]"
          value={buyAmount}
          onChange={(e) => setBuyAmount(e.target.value)}
          placeholder="Buy Amount in ETH '0.1'"
        />
        <button
          type="button"
          className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4"
          onClick={(e) => buyTokenICO(e)}
        >
          Buy ICO
        </button>
      </div>
      <div>
        <h1 className="text-[#D50DA8] text-center my-2 font-extrabold">wallet Status</h1>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">ETH balance</h1>
          <p className="dark:text-[#fff]">{` ${ETHBal} ETH`}</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Token balance</h1>
          <p className="dark:text-[#fff]">{` ${ICOTokenBal} ${tokenSymbol}`}</p>
        </div>
        <div className="flex justify-between item-center">
          {/* <h1 className="dark:text-[#fff]">Buy Amount</h1> */}
          {/* <p className="dark:text-[#fff]">18 ETH</p> */}
        </div>
      </div>
    </>
  );
};

Wallet.propTypes = {
  ICO: PropTypes.oneOfType([PropTypes.object]).isRequired,
  address: PropTypes.string.isRequired,
};

export default Wallet;
