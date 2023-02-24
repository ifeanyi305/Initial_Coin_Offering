import React from 'react';
import PropTypes from 'prop-types';

const ActiveICO = ({ ico }) => {
  const {
    tokenName, startDate, endDate, id, logoImage, tokenAddress, tokenAmount, IcoAddress,
  } = ico;

  console.log(startDate, id);

  return (

    <div className="bg-[#5B11F1] dark:bg-[#2D3133] p-4 rounded-2xl gap-4 text-white">
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
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">End Date</h1>
          <p className="dark:text-[#fff]">{endDate}</p>
        </div>
      </div>
    </div>
  );
};

ActiveICO.propTypes = {
  ico: PropTypes.oneOfType([PropTypes.object]).isRequired,
  // showDetails: PropTypes.func.isRequired,
};

export default ActiveICO;
