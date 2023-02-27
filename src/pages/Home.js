import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import FeaturedICO from '../component/FeaturedICO';
import pancake from '../images/Pancake.png';
import ethers from '../images/ethers.png';
import bunzz from '../images/bunzz.png';

const Home = () => {
  const [featured, setFeatured] = useState(false);
  const createIco = () => {
    setFeatured(!featured);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="heading dark:bg-[#2D3133] py-4 bg-[#D9D9D9]">
        <h1 className="text-center dark:text-[#fff] py-5 font-extrabold font-sans text-[30px]">
          The Best
          {' '}
          <span className="text-[#5B11F1]">Multi-Chain</span>
          {' '}
          Launchpad For Everyone
          {' '}
        </h1>
        <p className="text-center dark:text-[#fff] px-4">Create, Host and Participate in crypto ICO’s with ease. All the tools you need have been integrated seamlessly for you.</p>
        <div className="flex justify-center item-center mt-4">
          <button type="button" onClick={createIco} className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4">Launchpad</button>
          <button type="button" className="btn bg-[#D50DA8] px-4 py-1  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4"><Link to="/faq">Learn more</Link></button>
        </div>
        <ul className={!featured ? 'hidden' : 'launchpad p-4 mt-2 flex justify-center item-center border-2 bg-[#D9D9D9] dark:bg-[#2D3133] border-[#5B11F1] rounded-2xl'}>
          <div className="flex justify-between item-center gap-x-4">
            <button type="button" onClick={() => navigate('/CreateICO')} className="bg-[#5B11F1] text-[#fff] px-4 py-2  rounded-xl border-[2px] border-white font-extrabold cursor-pointer">Create Launchpad</button>
            <button type="button" onClick={() => navigate('/ico-list')} className="p-1 bg-[#5B11F1] text-[#fff] px-4 py-2  rounded-xl border-[2px] border-white font-extrabold cursor-pointer">Launchpad list</button>
          </div>
        </ul>
      </div>
      <section className="flex justify-center item-center mx-10">
        <div className="container">
          <div className="ico_headline md:flex justify-center item-center gap-x-10 my-4">
            <div className="border-2 dark:bg-[#2D3133] bg-[#D9D9D9] border-[#5B11F1] rounded-2xl">
              <h1 className="font-extrabold dark:text-[#fff] text-lg text-center p-4">50+</h1>
              <p className="text-center dark:text-[#fff] p-4">ICO Projects</p>
            </div>
            <div className="border-2 dark:bg-[#2D3133] bg-[#D9D9D9] my-4 md:my-0 border-[#5B11F1] rounded-2xl">
              <h1 className="font-extrabold dark:text-[#fff] text-lg text-center p-4">$1,500,557</h1>
              <p className="text-center dark:text-[#fff] p-4">Funds Raised</p>
            </div>
            <div className="border-2 dark:bg-[#2D3133] bg-[#D9D9D9] border-[#5B11F1] rounded-2xl">
              <h1 className="font-extrabold text-lg dark:text-[#fff] text-center p-4">5,200</h1>
              <p className="text-center dark:text-[#fff] p-4">Participants</p>
            </div>
          </div>
          <div className="featured_ICO bg-[#D9D9D9] dark:bg-[#2D3133] rounded-2xl">
            <div className="p-5">
              <h1 className="text-center my-4 font-extrabold text-[#D50DA8]">Featured ICO</h1>
              <div className="content">
                <FeaturedICO />
              </div>
            </div>
          </div>
          <h1 className="text-[#D50DA8] text-center my-2 font-extrabold">Partners</h1>
          <ul className="partners mb-28 flex justify-around item-center my-4">
            <li><img src={pancake} height={150} width={150} alt="pancake" /></li>
            <li><img src={ethers} height={150} width={150} alt="ethers" /></li>
            <li><img src={bunzz} height={150} width={150} alt="bunzz" /></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
