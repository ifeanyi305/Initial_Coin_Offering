import React from 'react';
import { FcAbout } from 'react-icons/fc';
import { IoMdContacts } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import { AiFillPhone, AiOutlineMail, AiOutlineLink } from 'react-icons/ai';
import { SiWikimediacommons } from 'react-icons/si';
import { Link } from 'react-router-dom';
import easylaunch from '../images/easylaunch.png';

const Footer = () => {
  const style = {
    padding: 'p-2 text-[#fff]',
    icon: 'bg-[#fff]',
  };
  return (
    <footer className="bg-[#5B11F1]">
      <section className="flex flex-wrap footer justify-between bottom-0 items-start bg-[#5B11F1] p-6">
        <div>
          <div className="flex items-center mt-4 gap-2">
            <FcAbout />
            <h1 className="font-extrabold italic text-[#fff]">About</h1>
          </div>
          <img className="my-2" src={easylaunch} alt="Easy Launch" height={24} width={102} />
          <p className="md:w-96 text-[#fff]">
            Easy Launch is a cutting-edge web3 blockchain platform that
            provides an all-in-one solution for users seeking to launch
            their own cryptocurrency. With a robust and secure architecture,
            Easy Launch enables users to create and manage their own digital
            assets and smart contracts, as well as conduct seamless and secure
            transactions on the blockchain.
          </p>
        </div>
        <div>
          <div className="flex items-center mt-4 gap-2">
            <IoMdContacts className={style.icon} />
            <h1 className="font-extrabold italic text-[#fff]">Contacts</h1>
          </div>
          <ul>
            <li className={style.padding}>
              <div className="flex items-center gap-2">
                <GoLocation />
                <p className="text-[#fff]">Via 13 nwosu, Abia state, Nigeria.</p>
              </div>
            </li>
            <li className={style.padding}>
              <div className="flex items-center gap-2">
                <AiFillPhone />
                <p className="text-[#fff]">+2347067255308</p>
              </div>
            </li>
            <li className={style.padding}>
              <div className="flex items-center gap-2">
                <AiFillPhone />
                <p className="text-[#fff]">+2349066711277</p>
              </div>
            </li>
            <li className={style.padding}>
              <div className="flex items-center gap-2">
                <AiOutlineMail />
                <a href="mailto:otijoseph305@gmail.com" className="text-[#fff]" target="_blank" rel="noreferrer">
                  otijoseph305@gmail.com
                </a>
              </div>
            </li>
            <li className={style.padding}>
              <div className="flex items-center gap-2">
                <AiOutlineMail />
                <a href="mailto:valentine6586@gmail.com" className="text-[#fff]" target="_blank" rel="noreferrer">
                  valentine6586@gmail.com
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex mt-4 items-center gap-2">
            <AiOutlineLink className={style.icon} />
            <h1 className="font-extrabold italic">Links</h1>
          </div>
          <ul className="">
            <li className={style.padding}><Link to="/">Home</Link></li>
            <li className={style.padding}><Link to="/ico-list">ICO List</Link></li>
            <li className={style.padding}><Link to="/CreateICO">Create ICO</Link></li>
            <li className={style.padding}><Link to="/dashboard">Dashboard</Link></li>
            <li className={style.padding}><Link to="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="flex mt-4 items-center gap-2">
            <SiWikimediacommons className={style.icon} />
            <h1 className="font-extrabold italic text-[#fff]">Social media handles</h1>
          </div>
          <ul>
            <li className={style.padding}>Telegram</li>
            <li className={style.padding}>Twitter</li>
            <li className={style.padding}>LinkedIn</li>
            <li className={style.padding}>Instagram</li>
          </ul>
        </div>
      </section>
      <hr className="text-[#D9D9D9] p-6" />
      <div className="flex p-6 items-center justify-between">
        <p className="text-[#fff]">copyright &copy;2023 All rights reserved</p>
        <p className="text-[#fff]">Built by V-Blaze and Ifeanyi</p>
      </div>
    </footer>
  );
};

export default Footer;
