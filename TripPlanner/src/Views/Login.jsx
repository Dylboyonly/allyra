import { useState } from "react";
import CloudVideo from "../assets/Untitled design-5.mp4";
import mountain from "../assets/background-bromo.png";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { baseUrl } from "../BaseUrl/baseUrl";
import { GoogleLogin } from '@react-oauth/google'



export default function LoginPage() {
  const navigate = useNavigate()
  const [Email,setEmail] = useState("");
  console.log(Email , "ini emailnya")
  const [Password,setPassword] = useState("");
  console.log(Password , "kok gadapet")
  const [visible , setVisible] = useState(false)

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const {data} = await axios.post(`${baseUrl}/login` ,{Email , Password})
      // console.log(data.access_token)
      localStorage.setItem("access_token",data.access_token )
      localStorage.setItem("email",Email)
      if(localStorage.access_token){
        navigate('/')
      }
    } catch (error){
      console.log(error)
      if(!localStorage.access_token){
        navigate('/login')
      }
    }
  }


  async function googleLogin(codeResponse){
    try {
      console.log(codeResponse);
      const { data } = await axios.post(
          `${baseUrl}/google-login`, null, {
          headers: {
              token: codeResponse.credential
          }
      });
      console.log(data)
      localStorage.setItem("access_token", data.access_token)
      if(localStorage.access_token){
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <>
      <div className="w-full h-screen bg-slate-400 overflow-hidden">
        <div className="w-full h-auto bg-slate-50">
          <video
            className="w-full h-[72%] bg-slate-500 object-cover absolute"
            src={CloudVideo}
            autoPlay
            loop
            muted
          />
        </div>
        <div className="absolute h-[100%] w-full pt-[15%]">
          <img className="h-full w-full object-cover" src={mountain} />
        </div>
        <div className="h-[80%] w-full absolute pt-[13%]">
          <div className="pl-[20%] w-full h-[30%] mb-[3rem]" id="animation">
            <h1 className="text-[25px] pb-3 text-slate-700" id="font1">
              Discover The Beauty of
            </h1>
            <h1 className="text-9xl pl-[6%] text-slate-700" id="fonts2">
              Indonesia
            </h1>
          </div>
          <div className=" w-full h-[10%] flex justify-between">
            <div
              className="w-[32%] ml-[7%] backdrop-blur-sm rounded-lg text-[13px] text-slate-700"
              id="greeting"
            >
              "Welcome to Indonesia! We are thrilled to have you visit our
              beautiful country, With its rich cultural heritage and stunning
              natural landscapes."
            </div>
            <div
              className="w-[35%] mr-[3%] mb-6 backdrop-blur-sm rounded-lg text-[13px] text-slate-700"
              id="greeting"
            >
              We hope you enjoy every moment and experience the warmth and
              hospitality{" "}
              <span className="backdrop-blur-sm rounded-lg ml-[46%] text-slate-700">
                of our people .Have a wonderful trip in{" "}
                <span
                  className="text-2xl w-[30%] ml-[72%] text-slate-700 backdrop-blur-sm"
                  id="font1"
                >
                  Indonesia!
                </span>
              </span>
            </div>
          </div>
          <div className="w-full h-[70%] flex justify-center items-end">
            <button
              className="h-[12%] w-[15%] backdrop-blur-md rounded-lg text-slate-400 text-[20px] hover:scale-110"
              onClick={()=>{setVisible(true)}}
            >
              Discover More
            </button>
          </div>
          {visible && ( <div className="fixed inset-0 bg-slate-700 bg-opacity-60 flex justify-center items-center">
            <div className="backdrop-blur-xl h-[50vh] w-[25vw] rounded-lg border border-slate-400"> 
            <div className="flex justify-center w-full h-[20%] flex">
              <div className="w-[80%] h-full text-3xl text-slate-300 flex justify-around ml-[17%] mt-2" id="font1">Login Now!</div>
              <div className="w-[20%] h-full flex justify-end pr-4 text-slate-600 cursor-pointer" onClick={()=>{setVisible(false)}}>x</div>
            </div>
            <form className="w-full h-[80%]">
              <div className="w-[90%] h-[34%] ml-4">
                <label className="flex justify-center text-2xl text-slate-50 mb-2" id="">Email</label>
                <input 
                type="email"
                placeholder="index@gmail.com..."
                className="w-full bg-transparent h-[40%] border border-slate-50 rounded-lg px-3 text-slate-50"
                onChange={(e)=>{setEmail(e.target.value)}}/>
              </div>
              <div className="w-[90%] h-[33%] ml-4">
                <label className="flex justify-center text-2xl text-slate-50 mb-2"> Password</label>
                <input 
                 type="password"
                 placeholder="*********"
                 className="w-full bg-transparent h-[40%] border border-slate-400 rounded-lg px-3"
                 onChange={(e)=>{setPassword(e.target.value)}}/>
              </div>
              <div className="h-[1px] bg-slate-100 w-[80%] ml-[9%]" />
              <div className="w-full h-[33%] flex justify-center items-center">
                <button className="h-[40%] bg-slate-100 w-[50%] border rounded-lg text-1xl text-slate-600" onClick={handleLogin}>Login</button>
              </div>
              <div className="divider px-10">OR</div>
            <div className="mt-6 flex justify-center items-center">
                        <GoogleLogin onSuccess={googleLogin} />
                    </div>
            </form>
           
            </div>
          </div>)} 
        </div>
      </div>
    </>
  );
}
