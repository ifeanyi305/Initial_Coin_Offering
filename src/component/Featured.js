import React from 'react';
import { useNavigate } from 'react-router-dom';
import ethers from '../images/ethers.png';

const Featured = () => {
  const navigate = useNavigate();
  return (
    <div className="ico_contents py-4">
      <div className="ICO border-2 border-[#D50DA8] rounded-2xl">
        <div className="ico_image flex relative">
          <span className="bg-[#fff] px-2 text-center rounded-xl absolute right-2 top-2 border-2 border-[#D50DA8]">upcoming</span>
          <img src={ethers} className="rounded-2xl" alt="" height={200} width={300} />
        </div>
        <div className="bg-[#5B11F1] p-4 rounded-b-2xl">
          <div className="ico_text flex item-center justify-between">
            <h2 className="text-[#fff]">logo</h2>
            <p className="text-[#fff]">Shiba inu</p>
          </div>
          <div className="target">
            <h2 className="text-[#fff] font-extrabold">Target</h2>
            <h1 className="text-[#D50DA8]">15 ETH</h1>
            <div className="progress">
              <div className="cycle flex justify-between item-center">
                <p className="text-[#D50DA8]">0.57 ETH</p>
                <p className="text-[#D50DA8]">15 ETH</p>
              </div>
            </div>
          </div>
          <div className="timeout text-center">
            <p className="text-[#fff]">ICO Starts in</p>
            <p className="text-[#22c55e]">02.41.07.50</p>
          </div>
          <div className="flex justify-center item-center">
            <button type="button" onClick={() => navigate('/details')} className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4">View</button>
            <button type="button" className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
