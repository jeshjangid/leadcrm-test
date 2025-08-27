import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Mousewheel, Keyboard, Autoplay, FreeMode } from 'swiper/modules';
import Icons from './ui/Icons';
import capterra from '@images/capterra-logo.svg';
import userImg1 from '@images/user1-img.svg';
import userImg2 from '@images/user2-img.svg';
import userImg3 from '@images/user3-img.svg';
import ballImg from '@images/ball-icon.svg';

const WhatPeopleSay = () => {

  const data = [
    { desc: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“', userImg: userImg1, name: 'David Fincher', position: 'On Capterra' },
    { desc: 'My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”', userImg: userImg2, name: 'Lillian Williams', position: 'On Capterra' },
    { desc: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“', userImg: userImg3, name: 'Michael', position: 'On Capterra' },
    { desc: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“', userImg: userImg1, name: 'David Fincher', position: 'On Capterra' },
    { desc: 'My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!”', userImg: userImg2, name: 'Lillian Williams', position: 'On Capterra' },
    { desc: '“Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.“', userImg: userImg3, name: 'Michael', position: 'On Capterra' },
  ];

  const slidesPerViewConfig = {
  320: 1,   // mobile
  640: 2,   // tablet
  1024: 3,  // desktop
};


  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);

useEffect(() => {
  function handleResize() {
    const width = window.innerWidth;
    if (width >= 1024) {
      setSlidesPerView(slidesPerViewConfig[1024]);
    } else if (width >= 640) {
      setSlidesPerView(slidesPerViewConfig[640]);
    } else {
      setSlidesPerView(slidesPerViewConfig[320]);
    }
  }

  handleResize(); // run initially
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  return (
    <div className='w-full flex flex-col items-center lg:pb-7 lg:pt-[50px] md:pb-6 md:pt-10 pb-5 pt-8 px-5 z-10 relative'>
      <img src={ballImg} alt="ball" className='sm:size-[80px] size-[50px] absolute -top-6 sm:-top-10 right-0' />
      <div className='container overflow-x-hidden w-full flex flex-col items-start lg:gap-7 md:gap-5 sm:gap-4 gap-3 relative'>
        <div className='w-full flex justify-between items-center gap-3'>
          <h2 className='heading text-[#090F4E] font-semibold'>What people are saying about LeadCRM</h2>
          <div className='flex justify-end items-center gap-3'>
            <div className={`swiper-button-prev min-w-[42px] min-h-[42px] rounded-full ${activeIndex === 0 ? 'bg-[#FFFFFF] cursor-not-allowed' : 'bg-[#090F4E]'} cursor-pointer  border border-[#090F4E] flex items-center justify-center`}>
              <Icons icon='iconamoon:arrow-left-2' className={`${activeIndex === 0 ? 'text-[#090F4E]' : 'text-[#fff]'} h-[20px] min-w-[20px]`} />
            </div>
            <div className={`swiper-button-next min-w-[42px] min-h-[42px] rounded-full ${activeIndex === data.length - slidesPerView ? 'bg-[#FFFFFF] cursor-not-allowed' : 'bg-[#090F4E]'} cursor-pointer border border-[#090F4E] flex items-center justify-center`}>
              <Icons icon='iconamoon:arrow-right-2' className={`${activeIndex === data.length - slidesPerView ? 'text-[#090F4E]' : 'text-[#fff]'} h-[20px] min-w-[20px]`} />
            </div>
            
          </div>
        </div>
        <div className='w-full flex justify-start items-center'>
        <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          centeredSlides={false}
          spaceBetween={50}
          keyboard={true}
          grabCursor={true}
          initialSlide={0}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          modules={[Navigation, Mousewheel, Keyboard, FreeMode]}
          className="mySwiper"
          slideToClickedSlide={true}
          loop={false}
          // cssMode={true}
          watchSlidesProgress={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}

        >
          {
            data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='min-h-[350px] sm:min-h-[400px] bg-[#F9F0F8] p-6 rounded-[20px] border border-[#EEEFFFFC] flex flex-col items-start  justify-between '>
                  <div className='flex flex-col items-start gap-3'>
                    <span className='para text-[#2C2C2C] font-semibold'>
                      {item.desc}
                    </span>
                    <div className='flex justify-start gap-2'>
                      <div className='min-w-[30px] h-[30px] shadow-[0px_4px_34px_0px_#ADADAD1A] rounded-[6px] bg-[#FFFFFF] flex justify-center items-center'>
                        <img src={capterra} alt="" className='min-w-[20px] h-[20px]' />
                      </div>
                      <div className='flex justify-start items-center'>
                        {[...Array(5)].map((_, i) => (
                          <Icons key={i} icon='material-symbols:star-rounded' className='min-w-[20px] h-[20px] text-[#090F4E]' />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='w-full border-t border-[#7A7A7A4F] pt-3 flex justify-start items-center gap-2'>
                    <img src={item.userImg} alt="user" className='min-w-[44px] h-[44px] rounded-full' />
                    <div className='w-full flex flex-col items-start'>
                      <span className='text-[#090F4E] md:text-[20px] sm:text-[18px] text-[16px] font-semibold'>{item.name}</span>
                      <span className='text-[#696969] md:text-[14px] sm:text-[12px] text-[10px] font-normal'>{item.position}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        </div>

      </div>
    </div>
  )
}

export default WhatPeopleSay