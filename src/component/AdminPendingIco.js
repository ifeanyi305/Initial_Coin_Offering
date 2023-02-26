import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AdminPendingIco = ({
  ico, activateICO, updatePrice, connectCA, transferOwner,
}) => {
  const [contractAddress, setContractAddress] = useState('');
  const {
    tokenName, startDate, endDate, id, logoImage, tokenAddress,
    tokenAmount, IcoAddress, ETHpricePerToken, IcoOwner,
  } = ico;

  console.log(startDate, endDate, id);

  return (
    <div className="border-2 border-[#D50DA8] rounded-xl">
      <div className="flex flex-col items-center mb-5">
        <h2 className="dark:text-[#000] font-bold">Created at</h2>
        <div className="bg-[#D50DA8] py-1 px-3 rounded-lg w-fit">
          <span>5:45:01</span>
        </div>
      </div>
      <div className="bg-[#5B11F1] dark:bg-[#2D3133] p-4 rounded-2xl text-[#fff]">
        <div>
          <div className="flex justify-between item-center">
            <h1 className="dark:text-[#fff]">{tokenName}</h1>
            <img src={logoImage} className="rounded-full border-2 border-white" alt="" height={32} width={32} />
          </div>
          <div className="flex justify-between item-center">
            <h1 className="dark:text-[#fff]">Token Address</h1>
            <p className="dark:text-[#fff]">{tokenAddress && `${tokenAddress.slice(0, 7)} .... ${tokenAddress.slice(36)}`}</p>
          </div>
          <div className="flex justify-between item-center">
            <h1 className="dark:text-[#fff]">ICO Address</h1>
            <p className="dark:text-[#fff]">{IcoAddress ? `${IcoAddress.slice(0, 7)} .... ${IcoAddress.slice(36)}` : 'No ICO Address Yet'}</p>
          </div>
          <div className="flex justify-between item-center">
            <h1 className="dark:text-[#fff]">ICO Amount</h1>
            <p className="dark:text-[#fff]">{parseFloat(tokenAmount).toLocaleString('en') }</p>
          </div>
          <div className="flex justify-between item-center">
            <h1 className="dark:text-[#fff]">Token CA balance</h1>
            <p className="dark:text-[#fff]">18</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full my-2">
        <form onSubmit={(e) => activateICO(e, contractAddress, id)} className="flex">
          <input
            className="input border-2 p-2 border-[#D50DA8] bg-[#fff] dark:bg-[#D9D9D9] dark:border-[#fff] rounded-2xl"
            type="text"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
          />
          <button
            type="submit"
            className="bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#D9D9D9]"
          >
            Activate
          </button>
        </form>
        <div className="flex justify-center items-center">
          <button
            type="button"
            onClick={() => updatePrice(IcoAddress, ETHpricePerToken)}
            className="bg-[#D50DA8] px-2 py-1  rounded-xl border-[2px] border-white text-[#D9D9D9]"
          >
            Update Price
          </button>
          <button
            type="button"
            onClick={() => connectCA(IcoAddress, tokenAddress)}
            className="bg-[#D50DA8] px-2 py-1  rounded-xl border-[2px] border-white text-[#D9D9D9]"
          >
            Connect CA
          </button>
          <button
            type="button"
            onClick={() => transferOwner(IcoAddress, IcoOwner)}
            className="bg-[#D50DA8] px-2 py-1  rounded-xl border-[2px] border-white text-[#D9D9D9]"
          >
            Transfer Ownership
          </button>
        </div>
      </div>
    </div>
  );
};

AdminPendingIco.propTypes = {
  ico: PropTypes.oneOfType([PropTypes.object]).isRequired,
  activateICO: PropTypes.func.isRequired,
  updatePrice: PropTypes.func.isRequired,
  connectCA: PropTypes.string.isRequired,
  transferOwner: PropTypes.string.isRequired,
};

export default AdminPendingIco;
