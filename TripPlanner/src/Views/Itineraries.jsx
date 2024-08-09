import axios from "axios"
import { useEffect, useState } from "react"
import { baseUrl } from "../BaseUrl/baseUrl"
import gambar from "../assets/simon-spring-31g-OHQByK8-unsplash.jpg"
import { useNavigate } from "react-router-dom"


export default function MyItineraries(){
    const [myPlan , setMyPlan] = useState([])
    const navigate = useNavigate()

    console.log(myPlan)

const id = 1
    async function fetchMyPlan(){
        try {

            const {data} = await axios.get(`${baseUrl}/MyPlan`,{
                headers:{
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            setMyPlan(data.findMyPlan)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchMyPlan()
    },[])

    return(
        <>
        <div className="w-full h-screen bg-white ">
            <div className="w-full h-[40%]">
                <img className="" src={gambar} />
            </div>

            <div className="w-full h-[60vh] ml-[20%] mb-[100%] inset-0 z-50 bg-slate-300 bg-opacity-10">
                <div className="w-[60vw] h-[60vh] backdrop-blur-3xl rounded lg overflow-auto">
                    <div className="text-white text-5xl flex justify-center" id="greeting">My Plan</div>
                    {myPlan.map((el ,index)=>{
                        return <div className="w-[80%] h-[35vh] border rounded-lg ml-[10%]" key={index} onClick={()=>{navigate(`/MyPlan/${el.id}`)}}>
                            <div className="w-full h-[15vh] flex justify-center items-center text-white text-2xl">{el.Title}</div>
                            <div className="w-full">{el.Itineraries.slice(0,500)}</div>
                        </div>
                    })}
                </div>
            </div>
            </div>  
        </>
    )
}