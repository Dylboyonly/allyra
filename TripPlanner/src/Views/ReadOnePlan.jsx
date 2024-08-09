import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../BaseUrl/baseUrl";
import gambar from "../assets/simon-spring-31g-OHQByK8-unsplash.jpg";
import { useNavigate } from "react-router-dom";

export default function SpesificItineraries() {
  const [myonePlan, setMyOnePlan] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  async function fetcOnehMyPlan() {
    try {
      const data = await axios.get(`${baseUrl}/MyPlan/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetcOnehMyPlan();
  }, []);

  return (
    <>
      {/* <div className="w-full h-screen bg-white overflow-hidden relative">
            <div className="w-full h-[40%] absolute">
                <img className="absolute" src={gambar} />
            </div>

            <div className="w-full h-full fixed inset-0 z-50 flex justify-center items-center bg-slate-300 bg-opacity-10">
                <div className="w-[60vw] h-[60vh] backdrop-blur-3xl rounded lg overflow-auto">
                    <div className="text-white text-5xl flex justify-center" id="greeting">My Plan</div>


                    hahahha
                </div>
            </div>
            </div>   */}

      <div className="bg-slate-50"></div>
    </>
  );
}
