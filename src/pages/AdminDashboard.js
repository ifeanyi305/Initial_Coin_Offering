import React, { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
} from 'firebase/firestore';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useStateContext } from '../context';
import { db } from '../firebase';
import AdminactiveICO from '../component/AdminactiveICO';
import AdminPendingIco from '../component/AdminPendingIco';

const AdminDashboard = ({ address }) => {
  const [ICOs, setICOs] = useState([]);
  const [pendingICOs, setPendingICOs] = useState(null);
  // const [contractAddress, setContractAddress] = useState('');

  const { transferOwnership, connectToken, updateTokenPrice } = useStateContext();

  const getICOData = async () => {
    // setLoading(true);
    const ICORef = collection(db, 'ICOs');
    const first = query(ICORef, orderBy('timestamp'));
    const docSnapshot = await getDocs(first);
    setICOs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    // setLoading(false);
  };

  const getPending = () => {
    const AllpendingICOs = ICOs.filter((ico) => ico.status === 'pending');
    setPendingICOs(AllpendingICOs);
  };

  const activateICO = async (e, CA, id) => {
    e.preventDefault();
    console.log(CA, id);

    try {
      await updateDoc(doc(db, 'ICOs', id), {
        IcoAddress: CA,
      });
      toast.success('ICO Address updated successfully');
    } catch (err) {
      console.log(err);
    }
  };

  const transferOwner = async (IcoAddress, IcoOwner) => {
    const data = await transferOwnership(IcoAddress, IcoOwner);
    if (data?.res) {
      toast.success('Ownership Transfered successfully');
    } else {
      toast.error(data.reason);
    }
  };

  const connectCA = async (IcoAddress, tokenAddress) => {
    const data = await connectToken(IcoAddress, tokenAddress);
    console.log(data, 'conn');
    if (data?.res) {
      toast.success('Contract added successfully');
    } else {
      toast.error(data.reason);
    }
  };

  const updatePrice = async (IcoAddress, ETHpricePerToken) => {
    const data = await updateTokenPrice(IcoAddress, ETHpricePerToken);
    // console.log('here', data);
    if (data.res) {
      toast.success('Price Updated successfully');
    } else {
      toast.error(data.reason);
    }
  };

  useEffect(() => {
    getICOData();
  }, [address]);

  useEffect(() => {
    getPending();
  }, [ICOs]);

  // console.log(pendingICOs);

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
            <div className="bg-[#D9D9D9] md:w-96 my-4 w-full p-4 rounded-2xl flex flex-col gap-4">
              {pendingICOs && (
                pendingICOs.map((ico) => (
                  <AdminPendingIco
                    key={ico.id}
                    ico={ico}
                    transferOwner={transferOwner}
                    connectCA={connectCA}
                    updatePrice={updatePrice}
                    activateICO={activateICO}
                  />
                ))
              )}
            </div>
          </div>
          <div>
            <h1 className={manage.style}>Active ICO</h1>
            <div className="bg-[#D9D9D9] md:w-96 my-4 w-full p-4 rounded-2xl flex flex-col gap-4">
              {ICOs && (
                ICOs.map((ico) => (
                  <AdminactiveICO
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

AdminDashboard.propTypes = {
  address: PropTypes.string.isRequired,
};

export default AdminDashboard;
