import React, { useState, useEffect } from 'react';
import {
  collection,
  getDocs,
  limit,
  orderBy,
  query,
} from 'firebase/firestore';
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { db } from '../firebase';
import ICOCard from './ICOCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);

const FeaturedICO = () => {
  const [ICOs, setICOs] = useState([]);

  const getICOData = async () => {
    // setLoading(true);
    const ICORef = collection(db, 'ICOs');
    const first = query(ICORef, orderBy('timestamp'), limit(3));
    const docSnapshot = await getDocs(first);
    setICOs(docSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    // setLoading(false);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    getICOData();
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const breakpoint = 768;
  if (screenWidth > breakpoint) {
    return (
      <div className="flex flex-wrap justify-around item-center">
        {ICOs.map((ico) => (
          <ICOCard
            ico={ico}
            key={ico.id}
          />
        ))}
      </div>
    );
  }
  return (
    <Swiper
      modules={[Navigation, Pagination, Mousewheel, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      loop
      mousewheel
      autoplay={{
        delay: 10000,
        disableOnInteraction: true,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {ICOs.map((ico) => (
        <SwiperSlide key={ico.id}>
          <ICOCard
            ico={ico}
            key={ico.id}
          />
        </SwiperSlide>
      ))}
      {/* <SwiperSlide><ICOCard /></SwiperSlide> */}
      {/* <SwiperSlide><ICOCard /></SwiperSlide> */}
      {/* <SwiperSlide><ICOCard /></SwiperSlide> */}
    </Swiper>
  );
};

export default FeaturedICO;
