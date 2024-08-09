import Introduction from "../Components/Form";
import Carrousel from "../Components/Modal";
import Nav from "../assets/Untitled design.png"
import DestinationCard from "../Components/destination";
import Info from "../Components/info";
import peta from "../assets/2.png"
import HowToPrompt from "../Components/howto";
import footer from "../assets/Contact us.png"

export default function LandingPage() {
  return (
    <>
      <div className=" w-full bg-white overflow-hidden">
        <div className="grid grid-cols-5 pl-5 absolute h-[3vh] w-full mt-[36%] z-50 shadow-2xl">
          <div className="card bg-slate-50 h-[8rem] w-[17vw] mb-2 shadow-2xl hover:scale-110 transition-transform">
            <div className="card bg-slate-50 h-[8rem] w-[18vw] mb-2 shadow-2xl flex justify-center items-center">
              <p className="text-4xl text-black">10M+</p>
              <p>Total Customers</p>
            </div>
          </div>
          <div className="card bg-slate-50 h-[8rem] w-[17vw] mb-2 shadow-2xl hover:scale-110 transition-transform">
            <div className="card bg-slate-50 h-[8rem] w-[18vw] mb-2 shadow-2xl flex justify-center items-center">
              <p className="text-4xl text-black">10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
          <div className="card bg-slate-50 h-[8rem] w-[17vw] mb-2 shadow-2xl hover:scale-110 transition-transform">
            <div className="card bg-slate-50 h-[8rem] w-[18vw] mb-2 shadow-2xl flex justify-center items-center">
              <p className="text-4xl text-black">8K</p>
              <p>Total Destination</p>
            </div>
          </div>
          <div className="card bg-slate-50 h-[8rem] w-[17vw] mb-2 shadow-2xl hover:scale-110 transition-transform">
            <div className="card bg-slate-50 h-[8rem] w-[18vw] mb-2 shadow-2xl flex justify-center items-center">
              <p className="text-4xl text-black">4.9 ⭐️</p>
              <p>Total Reviews</p>
            </div>
          </div>
          <div className="card bg-slate-50 h-[8rem] w-[17vw] mb-2 shadow-2xl hover:scale-110 transition-transform">
            <div className="card bg-slate-50 h-[8rem] w-[18vw] mb-2 shadow-2xl flex justify-center items-center">
              <p className="text-4xl text-black">17M+</p>
              <p>Transaction Deals</p>
            </div>
          </div>
        </div>
        <div className="h-[65vh] w-full bg-slate-700 bg-slate-900" id="slider">
          <Carrousel />
        </div>
        <div
          className="divider px-10 text-slate-600 text-4xl mt-[12%] z-index-50 "
          id="greeting"
        >
          Welcome To
        </div>
        <Introduction />
        <div className="h-screen w-full bg-white">
            <img className="w-full h-full absolute object-cover" src={peta} />
            <Info />
        </div>
        <div className="h-screen w-full pt-5">
            <div className="w-full h-[16vh] flex mt-8 px-[4%]">
                <div className="w-[40%] h-full pl-4 pt-3">
                    <p className="text-1xl text-slate-400">Popular Destination</p>
                    <p className="text-5xl text-slate-700"> Indonesian Tourism</p>
                </div>
                <div className=" w-[60%] h-full px-10 mt-9 text-slate-700 pt-2">Visitors can immerse themselves in the warmth of local hospitality, dive into the diverse marine life of <p>Komodo National Park. With its stunning landscapes, rich cultural heritage,</p> and endless opportunities for exploration, Indonesia is a destination that promises unforgettable experiences.</div>
            </div>
            <div className="h-screen w-full h-screen w-full bg-white absolute mt-[5%]">
            <DestinationCard />
            </div>
        </div>
            <div className="h-screen w-full bg-white relative mt-[10%]">
                <HowToPrompt />
            </div>
            <div className="h-full w-full bg-white relative mt-[10%]">
                <img className=" h-full w-full object-fill" src={footer} />
            </div>
      </div>
    </>
  );
}
