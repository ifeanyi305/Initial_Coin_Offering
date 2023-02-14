import React from 'react';

const Wallet = () => {
  return (
    <>
      <div className="text-center">
        <h2 className="font-extrabold dark:text-[#fff]">ICO starts in</h2>
        <span className="bg-[#5B11F1] p-1 rounded-full">00:04:10:50</span>
      </div>
      <div className="flex justify-between item-center">
        <p className="text-[#D50DA8]">0ETH</p>
        <p className="text-[#D50DA8]">10ETH</p>
      </div>
      <div className="mb-4">
        <input type="text" className="block my-4 bg-[#fffff] border-2 w-100 p-2 rounded-full border-[#D50DA8]" name="search" id="search" placeholder="Buy ICO" />
        <span className="bg-[#D50DA8] mt-2 p-2 rounded-full">00:04:10:50</span>
      </div>
      <div>
        <h1 className="text-[#D50DA8] text-center my-2 font-extrabold text-[#D50DA8]">wallet Status</h1>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">ETH balance</h1>
          <p className="dark:text-[#fff]">8ETH</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Token balance</h1>
          <p className="dark:text-[#fff]">0 SHIB</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Buy Amount</h1>
          <p className="dark:text-[#fff]">18 ETH</p>
        </div>
      </div>
      <h1 className="text-[#D50DA8] text-center my-2 font-extrabold text-[#D50DA8]">wallet Status</h1>
    </>
  );
}

export default Wallet