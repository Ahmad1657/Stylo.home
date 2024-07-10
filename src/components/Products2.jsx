import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Products2 = () => {
  return (
    <>
    <div style={{margin:'30px 0'}}>
    <h2 style={{textAlign:'center', marginBottom:'20px'}}> Best Seller </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      breakpoints={{
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
       768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        
      }}
      >
        <SwiperSlide> 
                 <div className="item 1">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/CL137101_3_360x.jpg?v=1682510764"/></div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 2">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR516501_3_360x.jpg?v=1704800196"/></div>
                             <div className="description">Maroon Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 3">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/CL926301_3_360x.jpg?v=1703248712"/></div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 4">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/PU021801_3_540x.jpg?v=1708076540"/></div>
                             <div className="description">Sky Blue Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 5">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR051301_3_540x.jpg?v=1709105312"/></div>
                             <div className="description">Coffee Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 6">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/CL154001_3_e47d072e-f87a-40fc-b252-110a41de1b28_540x.jpg?v=1711699319"/></div>
                             <div className="description">Black Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 7">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/CL180801_3_540x.jpg?v=1710488122"/></div>
                             <div className="description">Blue Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 8">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/FR518601_3_360x.jpg?v=1703248867"/></div>
                             <div className="description">Black Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 9">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/products/CL923501_3_360x.jpg?v=1683200129"/></div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default Products2;