import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';
import FormFeild from '../component/FormFeild';

const initialState = {
  tokenAmount: '',
  AmountToRaise: '',
  startDate: '',
  endDate: '',
  websiteLink: '',
  twitterLink: '',
  telegramLink: '',
  otherLink: '',
  description: '',
};

const CreateICO = () => {
  const [form, setForm] = useState(initialState);
  const [tokenAddress, setTokenAddress] = useState('');
  const [ICOImageFile, setICOImageFile] = useState(null);
  const [logoFile, setlogoFile] = useState(null);

  const {
    tokenAmount,
    AmountToRaise,
    startDate,
    endDate,
    websiteLink,
    twitterLink,
    telegramLink,
    otherLink,
    description,
  } = form;

  const handleChange = (name, e) => {
    setForm({ ...form, [name]: e.target.value });
  };

  const handleAddress = (e) => {
    setTokenAddress(e.target.value);
  };

  const uploadFile = (name, file) => {
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
        // setProgress(progress);
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          if (name === 'banner') {
            setICOImageFile(downloadUrl);
            toast.info('Banner upload to firebase successfully');
            console.log(ICOImageFile);
          } else {
            setlogoFile(downloadUrl);
            toast.info('Logo upload to firebase successfully');
            console.log(logoFile);
          }
        });
      },
    );
  };

  const handleUpload = (fileN, e) => {
    if (fileN === 'banner') {
      uploadFile('banner', e.target?.files[0]);
    } else {
      uploadFile('logo', e.target?.files[0]);
    }
    // console.log(ICOImageFile, logoFile);
  };

  // useEffect(() => {

  //   ICOImageFile && logoFile && uploadFile();
  // }, [ICOImageFile, logoFile]);

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
      <form className="dark:bg-[#2D3133] p-4 md:w-4/5 m-auto rounded-2xl mb-2 py-4 bg-[#D9D9D9]">
        <div>
          <h1 className={style.formColor}>Token Details</h1>
          <FormFeild
            handleChange={(e) => handleAddress(e)}
            value={tokenAddress}
            inputType="text"
            label="Paste Your Token Contract Address"
          />
        </div>
        <h1 className={style.formColor}>ICO Details</h1>
        <div className={style.formGrid}>
          <FormFeild
            handleChange={(e) => handleChange('tokenAmount', e)}
            value={tokenAmount}
            inputType="text"
            label="Token amount for ICO *"
          />
          <FormFeild
            handleChange={(e) => handleChange('AmountToRaise', e)}
            value={AmountToRaise}
            inputType="text"
            label="Target amount in ETH *"
          />
          <FormFeild
            handleChange={(e) => handleChange('startDate', e)}
            value={startDate}
            inputType="date"
            label="Start date *"
          />
          <FormFeild
            handleChange={(e) => handleChange('endDate', e)}
            value={endDate}
            inputType="date"
            label="End date *"
          />
        </div>
        <h1 className={style.formColor}>Additional Details</h1>
        <div className={style.formGrid}>
          <FormFeild
            handleChange={(e) => handleChange('websiteLink', e)}
            value={websiteLink}
            inputType="text"
            label="Website Link"
          />
          <FormFeild
            handleChange={(e) => handleChange('twitterLink', e)}
            value={twitterLink}
            inputType="text"
            label="Twitter link"
          />
          <FormFeild
            handleChange={(e) => handleChange('telegramLink', e)}
            value={telegramLink}
            inputType="text"
            label="Telegram link"
          />
          <FormFeild
            handleChange={(e) => handleChange('otherLink', e)}
            value={otherLink}
            inputType="text"
            label="Other link"
          />
          <div>
            <label htmlFor="userinput" className="dark:text-[#fff]" aria-label="">Upload Token Logo 32x32 *</label>
            <input
              id="userinput"
              className="input border-2 p-4 border-[#D50DA8] bg-[#fff] dark:bg-[#000] dark:border-[#fff] rounded-2xl block"
              type="file"
              onChange={(e) => handleUpload('logo', e)}
            />
          </div>
          <div>
            <label htmlFor="userinput" className="dark:text-[#fff]" aria-label="">ICO Banner not more than 5MB *</label>
            <input
              id="userinput"
              className="input border-2 p-4 border-[#D50DA8] bg-[#fff] dark:bg-[#000] dark:border-[#fff] rounded-2xl block"
              type="file"
              onChange={(e) => handleUpload('banner', e)}
            />
          </div>
        </div>
        <textarea
          value={description}
          onChange={(e) => handleChange('description', e)}
          rows="5"
          cols="30"
          className="flex p-4 my-2 items-start border-2 border-[#D50DA8] bg-[#fff] dark:bg-[#000] dark:border-[#fff] rounded-2xl"
        />
        <p>Details</p>
        <p>{ICOImageFile}</p>
        <p>{logoFile}</p>
      </form>
    </>
  );
};

export default CreateICO;
