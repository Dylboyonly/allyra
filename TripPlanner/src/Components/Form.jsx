
import video from "../assets/waves.mp4"


export default function Introduction(){

    return(
        <>
        <div className="h-[33vh] w-full"> 
        <div className="videobg w-full">
            <video className="w-full h-[30vh] object-cover" src={video} autoPlay loop muted />
            <p className="w-full h-[30vh] flex justify-center text-black bg-white bg-opacity-900" id="indonesia">INDONESIA</p>
        </div>
        </div>
        </>
    )
}