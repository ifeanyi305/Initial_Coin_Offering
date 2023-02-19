import React, { useState, useEffect } from 'react';
import SwiperCore, {
  Navigation, Pagination, Mousewheel, Autoplay,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import ICOCard from './ICOCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Mousewheel, Autoplay]);

const FeaturedICO = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
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
        <ICOCard />
        <ICOCard />
        <ICOCard />
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
      <SwiperSlide><ICOCard /></SwiperSlide>
      <SwiperSlide><ICOCard /></SwiperSlide>
      <SwiperSlide><ICOCard /></SwiperSlide>
    </Swiper>
  );
};

export default FeaturedICO;
