import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { useStateContext } from '../context';
import { db, storage } from '../firebase';
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

const CreateICO = ({ address }) => {
  const [form, setForm] = useState(initialState);
  const [tokenAddress, setTokenAddress] = useState('');
  const [ICOImageFile, setICOImageFile] = useState(null);
  const [logoFile, setlogoFile] = useState(null);
  const [tokenData, settokenData] = useState(null);
  const [pricePerToken, setPricePerToken] = useState(0);
  // const [errorMsg, setErrorMsg] = useState(null);
  // const [accountAddress, setaccountAddress] = useState(null);

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

  const navigate = useNavigate();
  const { getTokenData } = useStateContext();

  const fetchTokenDetails = async () => {
    let data;
    if (tokenAddress.length === 42) {
      if (address === '') return toast.error('Make sure your wallet is connected');
      if (tokenAddress === '') return toast.error('Make sure you enter correct Token Address');

      data = await getTokenData(tokenAddress);

      if (data?.data) {
        settokenData({ ...data?.data });
      } else {
        toast.info(data.error.reason);
      }
    }
    return data;
  };

  const handleChange = (name, e) => {
    setForm({ ...form, [name]: e.target.value });
    // console.log(form);
    // setaccountAddress(null);
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
            toast.info('Banner uploaded successfully');
            // console.log(ICOImageFile);
          } else {
            setlogoFile(downloadUrl);
            toast.info('Logo uploaded successfully');
            // console.log(logoFile);
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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (ICOImageFile && logoFile && tokenAddress && tokenData) {
      if (address !== '') {
        try {
          await addDoc(collection(db, 'ICOs'), {
            ...form,
            timestamp: serverTimestamp(),
            IcoOwner: address,
            IcoAddress: '',
            tokenAddress,
            AmountRaised: 0,
            logoImage: logoFile,
            ICOBanner: ICOImageFile,
            status: 'pending',
            ETHpricePerToken: pricePerToken,
            ...tokenData,
          });
          toast.success('ICO Created successfully');
        } catch (err) {
          // console.log(err);
          return err;
        }
      } else {
        return toast.error('Make sure your wallet is connected');
      }
    } else {
      return toast.error('All fields are mandatory to fill');
    }

    return navigate('/');
  };

  const getPricePertoken = () => {
    if (AmountToRaise && AmountToRaise) {
      setPricePerToken(Number(AmountToRaise / tokenAmount).toFixed(10).replace(/\.?0+$/, ''));
    }
  };

  useEffect(() => {
    getPricePertoken();
  }, [AmountToRaise, AmountToRaise]);

  useEffect(() => {
    fetchTokenDetails();
  }, [tokenAddress]);

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
          Checkout the
          <Link to="/faq">
            Faq
          </Link>
          or contact support for further clarification
        </p>
      </div>
      <section>
        <form onSubmit={handleSubmit} className=" flex flex-col dark:bg-[#2D3133] p-4 md:w-4/5 m-auto rounded-2xl mb-2 py-4 bg-[#D9D9D9]">
          <div>
            <h1 className={style.formColor}>Token Details</h1>
            <FormFeild
              handleChange={(e) => handleAddress(e)}
              value={tokenAddress}
              inputType="text"
              label="Paste Your Token Contract Address"
            />
            <div className="flex w-4/5 justify-between items-center font-bold text-green-600">
              <span>{tokenData && tokenData.tokenName}</span>
              <span>{tokenData && tokenData.tokenSymbol}</span>
              <span>{tokenData && parseFloat(tokenData.totalSupply).toLocaleString('en')}</span>
            </div>
            {/* <span>{errorMsg && errorMsg}</span> */}
          </div>
          <h1 className={style.formColor}>ICO Details</h1>
          <div className={style.formGrid}>
            <FormFeild
              handleChange={(e) => handleChange('tokenAmount', e)}
              value={tokenAmount}
              inputType="number"
              label="Token amount for ICO *"
            />
            <FormFeild
              handleChange={(e) => handleChange('AmountToRaise', e)}
              value={AmountToRaise}
              inputType="number"
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
              <span htmlFor="userinput" className="dark:text-[#fff]" aria-label="">Upload Token Logo 32x32 *</span>
              <input
                id="userinput"
                className="input border-2 p-4 border-[#D50DA8] bg-[#fff] dark:bg-[#fff] dark:border-[#fff] rounded-2xl block"
                type="file"
                onChange={(e) => handleUpload('logo', e)}
              />
            </div>
            <div>
              <span htmlFor="userinput" className="dark:text-[#fff]" aria-label="">ICO Banner not more than 5MB *</span>
              <input
                id="userinput"
                className="input border-2 p-4 border-[#D50DA8] bg-[#fff] dark:bg-[#fff] dark:border-[#fff] rounded-2xl block"
                type="file"
                onChange={(e) => handleUpload('banner', e)}
              />
            </div>
          </div>
          <p className="dark:text-[#fff]">Project Details</p>
          <textarea
            value={description}
            onChange={(e) => handleChange('description', e)}
            rows="5"
            cols="30"
            className="flex p-4 my-2 items-start border-2 border-[#D50DA8] bg-[#fff] dark:bg-[#fff] dark:border-[#fff] rounded-2xl"
          />
          <span className=" text-blue-600 font-bold">
            {pricePerToken}
            {' '}
            ETH per Token
          </span>
          <button type="submit" className="btn bg-[#D50DA8] px-4 py-1 self-center  rounded-xl border-[2px] border-white text-[#fff] mx-2 my-4">Create ICO</button>
        </form>
      </section>
    </>
  );
};

CreateICO.propTypes = {
  address: PropTypes.string.isRequired,
};

export default CreateICO;
