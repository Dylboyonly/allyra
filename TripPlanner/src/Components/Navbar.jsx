import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import { baseUrl } from "../BaseUrl/baseUrl";



export default function NavigationBar(){
  const navigate = useNavigate()
  const [profile , setProfile] = useState({})
  const [Username , setUserName] = useState('')
  const [Gender , setGender] = useState('')
  // console.log(profile)
  async function handleLogOut(){
    try {
      localStorage.clear()
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchProfile(){
   
    try {
      const data = await axios.get(`${baseUrl}/profile`,{
        headers:{
          Authorization:`Bearer ${localStorage.access_token}`
        }
      })
      setProfile(data.data.findProfile)
      console.log()
    } catch (error) {
      
    }
  }

  async function handleUpdate(e){
    e.preventDefault()
    try {
      const newUser={
        Username,
        Gender
      }
      console.log(newUser)
    } catch (error) {
      console.log(error)
    }
  }




  return (
    <>
    <header className="navbar w-full mt-0 ml-0 px-2 py-3 flex justify-between items-center z-50 fixed">
      <div className="text-4xl text-slate-100 pl-3 pb-2" id="fonts2">Allyra</div>
      <nav className="list border border-white pr-6 pt-2 pb-2 rounded-3xl backdrop-blur-md cursor-pointer">
        <div onClick={()=>{navigate('/')}}>Home</div>
        <div onClick={()=>{navigate('/')}}>About Us</div>
        <div onClick={()=>{navigate('/')}}>Services</div> 
        <div onClick={()=>{navigate('/')}}>Create Plan</div>
        <div onClick={()=>{navigate('/MyPlan')}}>My Plan</div>
      </nav>
      <div className="flex justify-end mr-6 gap-2 w-[10%] h-[5vh] backdrop-blur-lg rounded-3xl border border-slate-300">
            <span className="text-black text-1xl text-white font-semibold" >Profile</span>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="h-[4vh] rounded-full bg-transparent">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    onClick={fetchProfile}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content backdrop-blur-3xl rounded-box z-[1] mt-3 w-30 p-2 shadow border border-white"
              >
                
                <li>
                  <a className="text-white border-b-2">Profile</a>
                  <a className="text-white">{profile.Email}</a>
                  <a className="text-white">{profile.Username}</a>
                  <a className="text-white">{profile.Gender}</a>
                  <a className="text-white"></a>
                </li>
                <li className="flex justify-center items-center">
                  <button className="text-white border-b-2" onClick={handleUpdate}>Logout</button>
                </li>
                <li className="flex justify-center items-center">
                  <button className="text-white border-b-2" onClick={handleLogOut}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
    </header>
    </>
  );
}
