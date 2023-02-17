import React from 'react';
import FormFeild from '../component/FormFeild';

const CreateICO = () => {
  const style = {
    color: 'text-center my-1 dark:text-[#fff]',
    formColor: 'text-[#0D005B] dark:text-[#5B11F1] text-center my-2 font-extrabold',
    formGrid: 'grid grid-cols-1 md:grid-cols-2 gap-4',
  };
  return (
    <>
      <div className="header dark:bg-[#2D3133] mb-2 py-4 bg-[#D9D9D9]">
        <h1 className="text-[#D50DA8] text-center my-4 font-extrabold ">Create ICO&apos;s</h1>
        <p className="text-[#0D005B] dark:text-[#5B11F1] text-center my-2 font-extrabold">ICO creation fee is 0.2ETH</p>
        <p className={style.color}>
          Not sure how to create an ICO, We have
          a comprehensive guide on how to go about it
        </p>
        <p className={style.color}>
          Checkout the faq or contact support for further clarification
        </p>
      </div>
      <form className="dark:bg-[#2D3133] p-4 md:w-1/2 m-auto rounded-2xl mb-2 py-4 bg-[#D9D9D9]">
        <div>
          <h1 className={style.formColor}>Token Details</h1>
          <FormFeild
            inputType="text"
            label="Paste Your Token Contract Address"
          />
        </div>
        <h1 className={style.formColor}>ICO Details</h1>
        <div className={style.formGrid}>
          <FormFeild
            inputType="text"
            label="Token amount for ICO *"
          />
          <FormFeild
            inputType="text"
            label="Target amount in ETH *"
          />
          <FormFeild
            inputType="text"
            label="Start date *"
          />
          <FormFeild
            inputType="text"
            label="End date *"
          />
        </div>
        <h1 className={style.formColor}>Additional Details</h1>
        <div className={style.formGrid}>
          <FormFeild
            inputType="text"
            label="Website Link"
          />
          <FormFeild
            inputType="text"
            label="Twitter link"
          />
          <FormFeild
            inputType="text"
            label="Telegram link"
          />
          <FormFeild
            inputType="text"
            label="other link"
          />
          <FormFeild
            inputType="text"
            label="Upload Token Logo 32x32 *"
          />
          <FormFeild
            inputType="text"
            label="ICO Banner not more than 5MB *"
          />
        </div>
        <textarea rows="5" cols="30" className="flex p-4 my-2 items-start border-2 border-[#D50DA8] bg-[#fff] dark:bg-[#000] dark:border-[#000] rounded-2xl" />
        <p>Details</p>
      </form>
    </>
  );
};

export default CreateICO;
