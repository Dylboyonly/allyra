import pantai from "../assets/inipantai.jpg";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import axios from "axios";
import { baseUrl } from "../BaseUrl/baseUrl";
import { useNavigate } from "react-router-dom";

export default function DestinationCard() {
  const navigate = useNavigate()
  const[ destination , setDestiNation]=useState([])
  console.log(destination)

  async function fetchDestination(){
    try {
      const data = await axios.get(`${baseUrl}/destination`,{
        headers:{
          Authorization: `Bearer ${localStorage.access_token}`
        }
      })
      // console.log(data.data.ReadAll)
      setDestiNation(data.data.ReadAll)
    } catch (error) {
      console.log(error)
      
    }
  }

  useEffect(()=>{
    fetchDestination()
  },[])

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {destination.map((el,index)=>{
          return <SwiperSlide>
          <div className="relative h-[80vh] w-[90vw]">
            <img
              className="mt-2 ml-[5%] h-full w-full object-cover rounded-3xl"
              src={el.MainImage}
              alt="Pantai"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start pl-[10%] pt-[3%]">
              <p className="text-white text-7xl font-bold z-50" id="fonts2">{el.Name}</p>
              <button className="text-white text-xl mt-5 px-3 py-3 border border-white rounded-3xl" onClick={()=>{navigate(`/destination/${el.id}`)}}>
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        })}
        {/* <SwiperSlide>
          <div className="relative h-[80vh] w-[90vw]">
            <img
              className="mt-2 ml-[5%] h-full w-full object-cover rounded-3xl"
              src={pantai}
              alt="Pantai"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start pl-[10%] pt-[3%]">
              <p className="text-white text-7xl font-bold z-50" id="fonts2">Raja Ampat</p>
              <button className="text-white text-xl mt-5 px-3 py-3 border border-white rounded-3xl">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[80vh] w-[90vw]">
            <img
              className="mt-2 ml-[5%] h-full w-full object-cover rounded-3xl"
              src={pantai}
              alt="Pantai"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start pl-[10%] pt-[3%]">
              <p className="text-white text-7xl font-bold z-50" id="fonts2">Raja Ampat</p>
              <button className="text-white text-xl mt-5 px-3 py-3 border border-white rounded-3xl">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[80vh] w-[90vw]">
            <img
              className="mt-2 ml-[5%] h-full w-full object-cover rounded-3xl"
              src={pantai}
              alt="Pantai"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start pl-[10%] pt-[3%]">
              <p className="text-white text-7xl font-bold z-50" id="fonts2">Raja Ampat</p>
              <button className="text-white text-xl mt-5 px-3 py-3 border border-white rounded-3xl">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[80vh] w-[90vw]">
            <img
              className="mt-2 ml-[5%] h-full w-full object-cover rounded-3xl"
              src={pantai}
              alt="Pantai"
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start pl-[10%] pt-[3%]">
              <p className="text-white text-7xl font-bold z-50" id="fonts2">Raja Ampat</p>
              <button className="text-white text-xl mt-5 px-3 py-3 border border-white rounded-3xl">
                Discover More
              </button>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
