import React from 'react';

const Footer = () => {
  const style = {
    color: 'dark:text-[#fff]',
  };
  return (
    <footer className="flex justify-between items-center bg-[#5B11F1] p-4">
      <div>
        <p className={style.color}>Copyright&copy; of 2023</p>
        <p className={style.color}>All rights reserved</p>
      </div>
      <div>
        <h2 className={style.color}>Powered By</h2>
        <h1 className="font-extrabold text-lg text-[#D50DA8]">BUNZZ.DEV</h1>
      </div>
      <div className="flex item-center gap-3">
        <p className={style.color}>telegram</p>
        <p className={style.color}>twitter</p>
      </div>
    </footer>
  );
};

export default Footer;
