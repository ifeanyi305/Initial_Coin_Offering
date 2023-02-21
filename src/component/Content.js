import React from 'react';
import PropTypes from 'prop-types';

const Content = ({ ICO }) => {
  const {
    endDate, startDate, IcoAddress,
    tokenName, tokenSymbol, totalSupply,
    tokenAddress, tokenAmount, AmountToRaise,
  } = ICO;

  return (
    <>
      <div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Ico Address</h1>
          <p className="dark:text-[#fff]">{IcoAddress}</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Token name</h1>
          <p className="dark:text-[#fff]">{tokenName}</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Token symbol</h1>
          <p className="dark:text-[#fff]">{tokenSymbol}</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Token Decimal</h1>
          <p className="dark:text-[#fff]">18</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Token Address</h1>
          <p className="dark:text-[#fff]">{tokenAddress && `${tokenAddress.slice(0, 7)} .... ${tokenAddress.slice(36)}`}</p>
        </div>
      </div>
      <div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Token supply</h1>
          <p className="dark:text-[#fff]">{parseFloat(totalSupply).toLocaleString('en') }</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Token for ICO</h1>
          <p className="dark:text-[#fff]">{parseFloat(tokenAmount).toLocaleString('en') }</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">Target</h1>
          <p className="dark:text-[#fff]">{` ${AmountToRaise} ETH`}</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">ICO Start time</h1>
          <p className="dark:text-[#fff]">{startDate}</p>
        </div>
        <div className="flex justify-between item-center">
          <h1 className="dark:text-[#fff]">ICO end time</h1>
          <p className="dark:text-[#fff]">{endDate}</p>
        </div>
      </div>
    </>
  );
};

Content.propTypes = {
  ICO: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Content;
