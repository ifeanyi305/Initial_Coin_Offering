import React from 'react';
import PropTypes from 'prop-types';

const PendingIco = ({ ico, transferToken }) => {
  const {
    tokenName, startDate, endDate, id, logoImage, tokenAddress, tokenAmount, IcoAddress,
  } = ico;

  console.log(startDate, endDate);

  const manage = {
    style: 'text-[#D50DA8] text-center my-2 font-extrabold',
    // font: 'text-[#000] text-center my-2 font-extrabold',
  };

  return (
    <>
      <h1 className={manage.style}>The ICO will be active in</h1>
      <p className="bg-[#D50DA8] my-2 text-center p-1 rounded-2xl">00:04:10:50</p>
      <div className="bg-[#5B11F1] dark:bg-[#2D3133] text-white p-4 rounded-2xl">
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
      <div className="flex justify-center items-center">
        <button
          type="button"
          onClick={() => transferToken(tokenAddress, IcoAddress, tokenAmount, id)}
          className="bg-[#D50DA8] px-2 py-1  rounded-xl border-[2px] border-white text-[#D9D9D9]"
        >
          Transfer Token
        </button>
      </div>
    </>
  );
};

PendingIco.propTypes = {
  ico: PropTypes.oneOfType([PropTypes.object]).isRequired,
  transferToken: PropTypes.func.isRequired,
};

export default PendingIco;
