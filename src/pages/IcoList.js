/* eslint-disable */
import React, { useState, useEffect } from 'react';
import {
  collection,
  endAt,
  endBefore,
  getDocs,
  limit,
  limitToLast,
  orderBy,
  query,
  startAfter,
} from 'firebase/firestore';
import { db } from '../firebase';
import ICOCard from '../component/ICOCard';

const IcoList = () => {
  // const [loading, setLoading] = useState(false);
  const [ICOs, setICOs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastVisible, setLastVisible] = useState(null);
  const [noOfPages, setNoOfPages] = useState(null);
  const [count, setCount] = useState(null);

  const getICOData = async () => {
    // setLoading(true);
    const ICORef = collection(db, 'ICOs');
    const first = query(ICORef, orderBy('timestamp'), limit(4));
    const docSnapshot = await getDocs(first);
    setICOs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    setCount(docSnapshot.size);
    setLastVisible(docSnapshot.docs[docSnapshot.docs.length - 1]);
    // setLoading(false);
  };

  const getTotalICOs = async () => {
    const ICORef = collection(db, 'ICOs');
    const docSnapshot = await getDocs(ICORef);
    const totalICOs = docSnapshot.size;
    const totalPage = Math.ceil(totalICOs / 4);
    setNoOfPages(totalPage);
  };

  const fetchMore = async () => {
    // setLoading(true);
    const ICORef = collection(db, 'ICOs');
    const nextICOQuery = query(
      ICORef,
      orderBy('timestamp'),
      startAfter(lastVisible),
      limit(4),
    );
    const nextICOsSnaphot = await getDocs(nextICOQuery);
    setICOs(
      nextICOsSnaphot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
    );
    setCount(nextICOsSnaphot.size);
    setLastVisible(nextICOsSnaphot.docs[nextICOsSnaphot.docs.length - 1]);
    // setLoading(false);
  };

  const fetchPrev = async () => {
    // setLoading(true);
    const ICORef = collection(db, 'ICOs');
    const end = noOfPages !== currentPage ? endAt(lastVisible) : endBefore(lastVisible);
    const limitData = noOfPages !== currentPage
      ? limit(4)
      : count <= 4 && noOfPages % 2 === 0
        ? limit(4)
        : limitToLast(4);
    const prevICOsQuery = query(ICORef, orderBy('timestamp'), end, limitData);
    const prevICOsSnaphot = await getDocs(prevICOsQuery);
    setICOs(
      prevICOsSnaphot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
    );
    setCount(prevICOsSnaphot.size);
    setLastVisible(prevICOsSnaphot.docs[prevICOsSnaphot.docs.length - 1]);
    // setLoading(false);
  };

  useEffect(() => {
    getICOData();
    getTotalICOs();
  }, []);

  const handlePageChange = (value) => {
    if (value === 'Next') {
      setCurrentPage((page) => page + 1);
      fetchMore();
    } else if (value === 'Prev') {
      setCurrentPage((page) => page - 1);
      fetchPrev();
    }
  };

  // console.log(ICOs);

  return (
    <>
      <div className="header mb-2 dark:bg-[#2D3133] py-4 bg-[#D9D9D9]">
        <h1 className="text-[#D50DA8] text-center my-2 font-extrabold">Launchpad list</h1>
      </div>
      <section className="flex justify-center item-center mx-10">
        <div className="container">
          <div className="ico_list-container mb-3 dark:bg-[#2D3133] rounded-3xl p-6 bg-[#D9D9D9]">
            <div>
              <div className="md:flex justify-around p-4">
                <input type="search" className="bg-[#fffff] border-2 w-100 p-2 rounded-full border-[#D50DA8]" name="search" id="search" placeholder="Search ICO" />
                <div className="sm:mt-4">
                  <span htmlFor="ico">Sort by</span>
                  <select name="ico" id="ico">
                    <option value="upcoming">upcoming</option>
                    <option value="live">live</option>
                    <option value="ended">ended</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {ICOs.map((ico) => (
                  <ICOCard
                    ico={ico}
                    key={ico.id}
                    handlePageChange={handlePageChange}
                  />

                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IcoList;
