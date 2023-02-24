import React, { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
// eslint-disable-next-line
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import { db } from '../firebase';
import PendingIco from '../component/PendingIco';
import ActiveICO from '../component/ActiveICO';

const ManageIco = ({ address }) => {
  const [ICOs, setICOs] = useState([]);
  const [userICOs, setUserICOs] = useState([]);
  const [pendingICOs, setPendingICOs] = useState(null);

  const getICOData = async () => {
    // setLoading(true);
    const ICORef = collection(db, 'ICOs');
    const first = query(ICORef, orderBy('timestamp'));
    const docSnapshot = await getDocs(first);
    setICOs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    // setLoading(false);
  };

  const getUserICos = () => {
    const AllUserICOs = ICOs.filter((ico) => ico.IcoOwner === address);

    setUserICOs(AllUserICOs);
    const AllpendingICOs = AllUserICOs.filter((ico) => ico.status === 'pending');
    setPendingICOs(AllpendingICOs);
  };

  useEffect(() => {
    getICOData();
  }, [address]);

  useEffect(() => {
    getUserICos();
  }, [ICOs]);

  // console.log(userICOs);
  // console.log(pendingICOs, 'pending');

  const manage = {
    style: 'text-[#D50DA8] text-center my-2 font-extrabold',
    font: 'text-[#000] text-center my-2 font-extrabold',
  };

  // if (address === '') toast.info('Please Connect Your Wallet!');
  // if (address === '') toast.info('Please Connect Your Wallet!');

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
              <span>{pendingICOs ? '' : 'You Dont Have Any Pending ICO'}</span>

              {pendingICOs && (
                pendingICOs.map((ico) => (
                  <PendingIco
                    key={ico.id}
                    ico={ico}
                  />
                ))
              )}
            </div>
          </div>
          <div>
            <h1 className={manage.style}>Active ICO</h1>
            <div className="flex flex-col gap-6 bg-[#D9D9D9] md:w-96 my-4 w-full p-4 rounded-2xl">
              <h1 className={manage.font}>
                You can
                withdraw  Eth and the remaining token balance once ICO ends
              </h1>
              {userICOs && (
                userICOs.map((ico) => (
                  <ActiveICO
                    key={ico.id}
                    ico={ico}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ManageIco.propTypes = {
  address: PropTypes.string.isRequired,
};

export default ManageIco;
