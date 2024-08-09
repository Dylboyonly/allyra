import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import pantai from "../assets/inipantai.jpg"
import lombok from "../assets/1.png"
import bromo from "../assets/bromo.jpg"
import green from "../assets/bali.jpg"
import komodo from "../assets/komodo.jpg"
import chamemelon from "../assets/1 2.png"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



export default function Carrousel(){

    return(
        <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay,Pagination ,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='h-[68vh] w-full'>
                <img className='h-full w-full object-cover absolute rounded-3xl' src={pantai} />
                <div className='text-white absolute w-[40%] h-full pt-[14%] pl-[1%]'>
                    <p className="text-white text-[23px] pl-[5%] mb-3" id="font1">Discover The Beauty of</p>
                    <p className='text-white text-7xl pl-[13%] font-bold' id="fonts2">Raja Ampat</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='h-[68vh] w-full'>
                <img className='h-full w-full object-cover absolute rounded-3xl' src={bromo} />
                <div className='text-white absolute w-[60%] h-full pt-[25%] pl-[0%]'>
                    <p className="text-slate-500 text-[20px] pl-[3%] mb-3" id="font1">The Valorous</p>
                    <p className='text-slate-700 text-6xl pl-[11%] font-bold' id="fonts2">Gunung Bromo</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='h-[68vh] w-full'>
                <img className='h-full w-full object-cover absolute rounded-3xl' src={komodo} />
                <div className='text-white absolute w-[50%] h-full pt-[18%] pl-[2%]'>
                    <p className="text-white text-[20px] pl-[5%] mb-3" id="font1">The One and Only</p>
                    <p className='text-slate-200 text-7xl pl-[13%] font-bold' id="fonts2">Pulau Komodo</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='h-[68vh] w-full'>
                <img className='h-full w-full object-cover absolute mb-3 rounded-3xl' src={green} />
                <div className='text-white absolute w-full h-full pt-[17%] pl-[2%]'>
                    <p className="text-white text-[18px] pl-[75%] mb-3" id="font1">The Relaxing greenery of</p>
                    <p className='text-white text-7xl pl-[65%] font-bold' id="fonts2">Pulau Bali</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='h-[68vh] w-full'>
                <img className='h-full w-full object-cover absolute mb-3 rounded-3xl' src={chamemelon} />
                <div className='text-white absolute w-[40%] h-full pt-[22%] pl-[2%]'>
                    <p className="text-slate-300 text-[17px] pl-[5%] mb-3" id="font1">The Stunning Animals of</p>
                    <p className='text-slate-200 text-7xl pl-[13%] font-bold' id="fonts2">Papua</p>
                </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='h-[68vh] w-full'>
                <img className='h-full w-full object-cover absolute mb-3 rounded-3xl' src={lombok} />
                <div className='text-white absolute w-full h-[50%] pt-[16%]'>
                    <p className="text-white text-[15px] pl-[5%] mb-3" id="font1">The Magical </p>
                    <p className='text-white text-7xl pl-[7%] font-bold' id="fonts2">Kalimantan</p>
                </div>
            </div>
            </SwiperSlide>
      </Swiper>
        </>
    )
}