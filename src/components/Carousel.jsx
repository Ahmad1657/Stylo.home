import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://stylo.pk/cdn/shop/files/1920x600_2_381663d1-f18e-4d21-be7b-c2c11593a6b1.jpg?v=1719832680" /></SwiperSlide>
        <SwiperSlide><img src="https://stylo.pk/cdn/shop/files/1920x600-Kids.jpg?v=1719832680" /></SwiperSlide>
        <SwiperSlide><img src="https://stylo.pk/cdn/shop/files/1920x600_4_ee43c781-3611-4ebe-bcd1-7c7181265c3f.jpg?v=1715337950" /></SwiperSlide>
        <SwiperSlide><img src="http://stylo.pk/cdn/shop/files/1920X600_7_1d562326-5e2e-40ce-9e64-d2a11e88cbf5.jpg?v=1710220832" /></SwiperSlide>
        <SwiperSlide><img src="http://stylo.pk/cdn/shop/files/1920x600_3_00b19f0c-0677-49cd-a8fd-e2750fa17f73.jpg?v=1709980975" /></SwiperSlide>
        <SwiperSlide><img src="http://stylo.pk/cdn/shop/files/1920x600_3_ceaef281-6e5e-4f05-972a-75854755e698.jpg?v=1708763008" /></SwiperSlide>
        <SwiperSlide><img src="http://stylo.pk/cdn/shop/files/1920X600_14.jpg?v=1671106377" /></SwiperSlide>
        <SwiperSlide><img src="http://stylo.pk/cdn/shop/files/1920x600_4_0cf79098-36b7-4822-b2f4-ebb96307a119.jpg?v=1708864452" /></SwiperSlide>
        <SwiperSlide><img src="http://stylo.pk/cdn/shop/files/1920x600_fbe24a3b-c366-4823-837a-6afe100711d6.jpg?v=1710586825" /></SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel;
