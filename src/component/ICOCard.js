import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import ethers from '../images/ethers.png';

const ICOCard = ({ ico }) => {
  const navigate = useNavigate();
  const {
    tokenName, AmountToRaise, AmountRaised, startDate, endDate, id, logoImage, ICOBanner,
  } = ico;

  const getICOStatus = () => {
    const currentDate = new Date().toJSON().slice(0, 10);

    if (currentDate < startDate) {
      return 'Upcoming';
    } if (currentDate > startDate && currentDate < endDate) {
      return 'Live';
    } if (currentDate > endDate) {
      return 'Ended';
    }

    return 'Checking...';
  };

  return (
    <div className="ico_contents py-4">
      <div className="ICO border-2 border-[#D50DA8] rounded-2xl">
        <div className="ico_image flex relative">
          <span className="bg-[#fff] px-2 text-center rounded-xl absolute right-2 top-2 border-2 border-[#D50DA8]">{getICOStatus()}</span>
          <img src={ICOBanner} className="rounded-t-2xl w-full h-[200px]" alt="" />
        </div>
        <div className="bg-[#5B11F1] p-4 rounded-b-2xl">
          <div className="ico_text flex item-center justify-between">
            {/* <h2 className="text-[#fff]">logo</h2> */}
            <img src={logoImage} className="rounded-full border-2 border-white" alt="" height={42} width={42} />
            <p className="text-[#fff] font-black text-2xl">{tokenName}</p>
          </div>
          <div className="target">
            <h2 className="text-[#fff] font-extrabold">Target</h2>
            <h1 className="text-[#D50DA8]">{`${AmountToRaise} ETH`}</h1>
            <div className="progress">
              <div className="cycle flex justify-between item-center">
                <p className="text-[#D50DA8]">{`${AmountRaised} ETH`}</p>
                <p className="text-[#D50DA8]">{`${AmountToRaise} ETH`}</p>
              </div>
            </div>
          </div>
          <div className="timeout text-center">
            <p className="text-[#fff]">ICO Starts in</p>
            <p className="text-[#22c55e]">02.41.07.50</p>
          </div>
          <div className="flex justify-center item-center">
            <button type="button" onClick={() => navigate(`/details/${id}`)} className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4">View</button>
            <button type="button" className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

ICOCard.propTypes = {
  ico: PropTypes.oneOfType([PropTypes.object]).isRequired,
  // showDetails: PropTypes.func.isRequired,
};

export default ICOCard;
