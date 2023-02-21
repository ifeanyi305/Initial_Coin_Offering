import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { AiFillTwitterCircle, AiFillChrome, AiOutlineLink } from 'react-icons/ai';
import { BsTelegram } from 'react-icons/bs';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { db } from '../firebase';
import Content from '../component/Content';
import Wallet from '../component/Wallet';

const Details = ({ address }) => {
  const [ICO, setICO] = useState({});

  const { id } = useParams();

  const getICODetail = async () => {
    // setLoading(true);
    const docRef = doc(db, 'ICOs', id);
    const ICODetail = await getDoc(docRef);
    setICO(ICODetail.data());
    // setLoading(false);
  };

  useEffect(() => {
    getICODetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const {
    websiteLink, twitterLink, telegramLink, description, tokenName, logoImage, otherLInk,
  } = ICO;
  // console.log(websiteLink, twitterLink, telegramLink, otherLInk);

  return (
    <>
      <div className="header dark:bg-[#2D3133] mb-2 py-4 bg-[#D9D9D9]">
        <h1 className="text-[#D50DA8] text-center my-2 font-extrabold ">Current ICO&apos;s</h1>
      </div>
      <section className="flex justify-center item-center mx-10">
        <div className="container">
          <div className="flex justify-between item-center">
            <div className="m-4">
              <h1 className="dark:text-[#fff] text-2xl font-extrabold">{tokenName}</h1>
              <ul className="flex item-center gap-3">
                <AiFillChrome
                  className="h-[24px] w-[24px] cursor-pointer hover:border-2 hover:border-[#D50DA8] rounded-full"
                  onClick={() => openInNewTab(websiteLink)}
                />
                <AiFillTwitterCircle
                  className="h-[24px] w-[24px] cursor-pointer hover:border-2 hover:border-[#D50DA8] rounded-full"
                  onClick={() => openInNewTab(twitterLink)}
                />
                <BsTelegram
                  className="h-[24px] w-[24px] cursor-pointer hover:border-2 hover:border-[#D50DA8] rounded-full"
                  onClick={() => openInNewTab(telegramLink)}
                />
                <AiOutlineLink
                  className="h-[24px] w-[24px] cursor-pointer hover:border-2 hover:border-[#D50DA8] rounded-full"
                  onClick={() => openInNewTab(otherLInk)}
                />
              </ul>
            </div>
            <div className="m-4">
              <img src={logoImage} className="rounded-full border-2 border-[#D50DA8]" alt="" height={52} width={52} />
            </div>
          </div>
          <div className="md:flex justify-around item-center">
            <div className="md:w-96 sm:w-full mb-4">
              <p className="mb-4 dark:text-[#fff]">{description}</p>
              <div className="bg-[#D9D9D9] dark:bg-[#2D3133] p-4">
                <Content ICO={ICO} />
              </div>
            </div>
            <div className="bg-[#D9D9D9] dark:bg-[#2D3133] p-4 h-fit rounded-2xl">
              <Wallet ICO={ICO} address={address} />
            </div>
          </div>
          <h1 className="text-[#D50DA8] text-center my-2 font-extrabold">Chat</h1>
        </div>
      </section>
    </>
  );
};

Details.propTypes = {
  address: PropTypes.string.isRequired,
};

export default Details;
