import React from 'react';
import ethers from '../images/ethers.png';

const Featured = () => (
  <div className="ico_contents">
    <div className="ICO border-2 border-[#D50DA8] rounded-2xl relative">
      <div className="ico_image flex">
        <span className="bg-[#fff] px-2 text-center rounded-xl absolute right-2 top-2 border-2 border-[#D50DA8]">upcoming</span>
        <img src={ethers} className="rounded-2xl" alt="" height={200} width={300} />
      </div>
      <div className="bg-[#5B11F1] p-4 rounded-b-2xl">
        <div className="ico_text flex item-center justify-between">
          <h2>logo</h2>
          <p>Shiba inu</p>
        </div>
        <div className="target">
          <h2>Target</h2>
          <h1 className="text-[#D50DA8]">15 ETH</h1>
          <div className="progress">
            <div className="cycle flex justify-between item-center">
              <p className="text-[#D50DA8]">0.57 ETH</p>
              <p className="text-[#D50DA8]">15 ETH</p>
            </div>
          </div>
        </div>
        <div className="timeout text-center text-white">
          <p>ICO Starts in</p>
          <p>02:41:07:50</p>
        </div>
        <div className="flex justify-evenly items-center">
          <button type="button" className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4">View</button>
          <button type="button" className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4">Share</button>
        </div>
      </div>
    </div>
  </div>
);

export default Featured;
