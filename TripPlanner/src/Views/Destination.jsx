import { useEffect, useState } from "react";
import gemini from "../Gemini /Gemini";
import axios from "axios";
import { baseUrl } from "../BaseUrl/baseUrl";
import { useNavigate, useParams } from "react-router-dom";

export default function DestinationDetail() {
  const navigate = useNavigate()
  const [destination, setDestination] = useState("");
  // console.log(destination)
  const [date1, setDate1] = useState("");
  // console.log(date1)
  const [date2, setDate2] = useState("");
  // console.log(date2)
  const [budget, setBudget] = useState(0);
  // console.log(budget)
  const [persons, setPersons] = useState(0);
  // console.log(persons)
  const [prompt, setPrompt] = useState("");
  const [OneData, SetOneData] = useState({});

  const [visible , setVisible]=useState(false)
  const { id } = useParams();

  let destinationId = id;
  async function handlePrompt(e) {
    e.preventDefault();
    try {
      const hehe = await gemini(destination, date1, date2, budget, persons);
      // console.log(hehe)
      setPrompt(hehe);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAddMyPlan() {
    try {
      const myPlan = {
        Title: destination,
        Itineraries: prompt,
        DestinationId: destinationId,
      };
      // console.log(myPlan)
      const data = await axios.post(`${baseUrl}/MyPlan`, myPlan, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      setVisible(false)
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchOneData() {
    try {
      const { data } = await axios.get(`${baseUrl}/destination/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(data.One, "ini data");
      SetOneData(data.One);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOneData();
  }, [id]);

  return (
    <>
    <div className="h-screen w-full bg-white">
        <div className="h-[50%] w-full justify-center">
            <div className=" w-[98%] h-full ml-4">
                <img className="w-full h-full object-cover" src={OneData.MainImage}/>
            </div>
            <div className="flex w-full h-[10rem] pt-5 text-7xl text-black justify-center" id="fonts2"> {OneData.Name}</div>
        </div>

        <div
          className="divider px-10 text-slate-600 text-4xl mt-[12%] z-index-50 "
          id="greeting"
        >
          Overview
        </div>
        <div className="h-screen w-full bg-white mt-[3%]">
            <div className="w-[90%] h-[33%] bg-slate-500 ml-16 flex">
                <div className="h-[80%] w-[50%] bg-slate-50 text-2xl flex justify-center items-center">{OneData.Overview}</div>
                <div className="w-[50%] h-[100%] bg-slate-50"> 
                    <img className="w-[90%] h-[100%] object-cover" src={OneData.OverviewImg} />
                </div>
            </div>
            <div className="w-[90%] h-[33%] bg-slate-500 ml-16 flex mt-[5%]">
                <div className="w-[50%] h-[100%] bg-slate-50"> 
                    <img className="w-[90%] h-[100%] object-cover" src={OneData.CultureImg} />
                </div>
                <div className="h-[80%] w-[50%] bg-slate-50 text-2xl flex justify-center items-center">{OneData.Culture}</div>
            </div>
            <div className="w-[90%] h-[33%] bg-slate-500 ml-16 flex">
                <div className="h-[80%] w-[50%] bg-slate-50 text-2xl flex justify-center items-center">{OneData.Food}</div>
                <div className="w-[50%] h-[100%] bg-slate-50"> 
                    <img className="w-[90%] h-[100%] object-cover" src={OneData.FoodImg} />
                </div>
            </div>
        </div>
        <div className="h-[60vh] w-full bg-white pt-10">
            <div className="w-[90%] h-[60%] bg-slate-500 ml-16 flex">
                <div className="w-[50%] h-[100%] bg-slate-50"> 
                    <img className="w-[90%] h-[100%] object-cover" src={OneData.SiteImg} />
                </div>
                <div className="h-[80%] w-[50%] bg-slate-50 text-2xl flex justify-center items-center">{OneData.Site}</div>
            </div>
        <div className="w-full h-[40%]"> 
        <div className="w-full h-[50%] text-3xl text-slate-600 flex justify-center items-center" id="font1"> Interested to Visit {OneData.Name} ?</div>
        <div className="w-full h-auto flex items-center justify-center">
            <button className="w-[30%] h-full py-4 rounded-3xl border border-2 text-2xl hover:scale-110 transition-transform text-slate-700 border-slate-700" onClick={()=>{setVisible(true)}}>Plan Your Trip Now With Gemini AI </button>
        </div>
        </div>
        </div>
    </div>
    {visible && (
        <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex justify-center items-center gap-6">
        <div className="h-[60vh] w-[50vh] border backdrop-blur-3xl border-slate-700 rounded-lg flex justify-center">
          <form className="h-full w-[70%]">
            <div className="h-[10%] w-full flex justify-center">
              Make Your Plan
            </div>
            <div className="h-[15%] w-full">
              <label>Destination</label>
              <input
                type="text"
                placeholder="Jakarta"
                className="w-full h-[50%] bg-transparent rounded-lg border border-slate-400"
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
              />
            </div>
            <div className="h-[15%] w-full">
              <label>Departure Date</label>
              <input
                type="date"
                placeholder="Jakarta"
                className="w-full h-[50%] bg-transparent rounded-lg border border-slate-400"
                onChange={(e) => {
                  setDate1(e.target.value);
                }}
              />
            </div>
            <div className="h-[15%] w-full">
              <label>Arrival Date</label>
              <input
                type="date"
                placeholder="Jakarta"
                className="w-full h-[50%] bg-transparent rounded-lg border border-slate-400"
                onChange={(e) => {
                  setDate2(e.target.value);
                }}
              />
            </div>
            <div className="h-[15%] w-full">
              <label>Budget</label>
              <input
                type="number"
                placeholder="Jakarta"
                className="w-full h-[50%] bg-transparent rounded-lg border border-slate-400"
                onChange={(e) => {
                  setBudget(e.target.value);
                }}
              />
            </div>
            <div className="h-[15%] w-full">
              <label>Person</label>
              <input
                type="number"
                placeholder="Jakarta"
                className="w-full h-[50%] bg-transparent rounded-lg border border-slate-400"
                onChange={(e) => {
                  setPersons(e.target.value);
                }}
              />
            </div>
            <div className="h-[10%] w-full flex justify-center">
              <button
                className="w-[50%] h-full bg-transparent border rounded-lg border-slate-600 text-1xl"
                onClick={handlePrompt}
              >
                Prompt
              </button>
              <button
                className="w-[50%] h-full bg-transparent border rounded-lg border-slate-600 text-1xl"
                onClick={()=>{setVisible(false)}}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
        <div className="w-[50%] h-[60vh] border border-slate backdrop-blur-3xl rounded-lg overflow-auto">
          {prompt}
          <div className="h-[10%] w-full flex justify-center pt-4">
            <button
              className="h-[70%] w-[50%] border border-slate-400 rounded-lg"
              onClick={handleAddMyPlan}
            >
              Add to My Plan
            </button>
          </div>
        </div>
      </div>
    )}

      
    </>
  );
}
