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

const Products3 = () => {
  return (
    <>
    <div style={{margin:'30px 0'}}>
    <h2 style={{textAlign:'center', marginBottom:'20px'}}> Trending </h2>
    <div className='itemtyp'>
            <li>Sandals</li>
            <li>Sneakers</li>
            <li>Slippers</li>
            <li>Chappal</li>
            <li>Softys</li>
            <li>Kids</li>
            <li>1 PC</li>
    </div>
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
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FR824601_3_d29f9312-674b-4f9c-bd21-e9d88a264081_360x.jpg?v=1718532766"/></div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 2">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FR824506_3_700f6dff-d80f-49d2-93ce-aa58a804843b_360x.jpg?v=1718532758"/></div>
                             <div className="description">Maroon Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 3">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FR823423_3_acd26b37-5de0-4bc1-a8a0-551769a3ca02_360x.jpg?v=1718532751"/></div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 4">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN781715_3_785a8615-fbdb-400a-bc1d-ec47c0cd636c_360x.jpg?v=1718532734"/></div>
                             <div className="description">Sky Blue Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 5">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN780918_3_6a758e8d-0782-42fa-bf4e-5dff8680ec6a_360x.jpg?v=1718532727"/></div>
                             <div className="description">Coffee Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 6">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN779115_3_dfa677fc-28cc-4fd5-9d82-1f0eddd566e0_360x.jpg?v=1718532719"/></div>
                             <div className="description">Black Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 7">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FN778616_3_ef3fd29f-5cbc-4bbe-8cb0-b31091504354_360x.jpg?v=1718532711"/></div>
                             <div className="description">Blue Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 8">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/CL157409_3_9de3813b-0de8-45bf-96de-ca6448f46cd2_360x.jpg?v=1718193303"/></div>
                             <div className="description">Black Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="item 9">
                             <div className="pic"><img src="https://cdn.shopify.com/s/files/1/0485/1459/7030/files/FR824708_3_20f9180d-9fa3-4181-89df-d5f2cbda1b08_360x.jpg?v=1718026411"/></div>
                             <div className="description">Pink Formal Sandal</div>
                             <div className="price">Rs 1,960.00</div>
                 </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

export default Products3;