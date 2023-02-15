import React from 'react';
import telegram from "../images/telegram.png"
import twitter from "../images/twitter.png"
import www from "../images/www.png"
import youtube from "../images/youtube.png"
import ethers from '../images/ethers.png';
import Content from '../component/Content'
import Wallet from '../component/Wallet'

const Details = () => {
  return (
    <>
      <div className="header dark:bg-[#2D3133] mb-2 py-4 bg-[#D9D9D9]">
        <h1 className="text-[#D50DA8] text-center my-2 font-extrabold text-[#D50DA8]">Current ICO's</h1>
      </div>
      <section className="flex justify-center item-center mx-10">
        <div className="container">
          <div className="flex justify-between item-center">
            <div className="m-4">
              <h1 className="dark:text-[#fff]">Ico name</h1>
              <ul className="flex item-center gap-3">
                <li><img className="w-11" src={telegram} alt={'img'} /></li>
                <li><img className="w-11" src={www} alt={'img'} /></li>
                <li><img className="w-11" src={youtube} alt={'img'} /></li>
                <li><img className="w-11" src={twitter} alt={'img'} /></li>
              </ul>
            </div>
            <div classNme="m-4">
              <img className="w-40 rounded-lg" src={ethers} alt={'img'} />
            </div>
          </div>
          <div className="md:flex justify-around item-center">
            <div className="md:w-96 sm:w-full mb-4">
              <p className="mb-4 dark:text-[#fff]">
                What is Lorem Ipsum?
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <div className="bg-[#D9D9D9] dark:bg-[#2D3133] p-4">
                <Content />
              </div>
            </div>
            <div className="bg-[#D9D9D9] dark:bg-[#2D3133] p-4">
              <Wallet />
            </div>
          </div>
          <h1 className="text-[#D50DA8] text-center my-2 font-extrabold text-[#D50DA8]">Chat</h1>
        </div>
      </section>
    </>
  );
}

export default Details
