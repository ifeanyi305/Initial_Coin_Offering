import React from 'react';
import PendingIco from '../component/PendingIco';
import ActiveICO from '../component/ActiveICO';

const ManageIco = () => {
  const manage = {
    style: 'text-[#D50DA8] text-center my-2 font-extrabold',
    font: 'text-[#000] text-center my-2 font-extrabold',
  };
  return (
    <>
      <div className="header mb-2 dark:bg-[#2D3133] py-4 bg-[#D9D9D9]">
        <h1 className={manage.style}>Manage Ico</h1>
      </div>
      <section className="flex justify-center item-center mx-10">
        <div>
          <div>
            <h1 className={manage.style}>Pending ICO</h1>
            <div className="bg-[#D9D9D9] md:w-96 my-4 w-full p-4 rounded-2xl">
              <h1 className={manage.font}>The ICO will be active in</h1>
              <p className="bg-[#D50DA8] my-2 text-center p-1 rounded-2xl">00:04:10:50</p>
              <PendingIco />
            </div>
          </div>
          <div>
            <h1 className={manage.style}>Active ICO</h1>
            <div className="bg-[#D9D9D9] md:w-96 my-4 w-full p-4 rounded-2xl">
              <h1 className={manage.font}>
                You can
                withdraw  Eth and the remaining token balance once ICO ends
              </h1>
              <ActiveICO />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageIco;
