import React from 'react';

const Footer = () => {
  const handleClick = () => {

  };

  return (
    <footer className="flex justify-between items-center bg-[#5B11F1] p-4">
      <button type="button" onClick={() => handleClick()}>Test</button>
      <div>
        <p>Copyright&copy; of 2023</p>
        <p>All rights reserved</p>
      </div>
      <div>
        <h2>Powered By</h2>
        <h1 className="font-extrabold text-lg text-[#D50DA8]">BUNZZ.DEV</h1>
      </div>
      <div className="flex item-center gap-3">
        <p>telegram</p>
        <p>twitter</p>
      </div>
    </footer>
  );
};

export default Footer;
