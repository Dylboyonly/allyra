
import sumatra from "../assets/papua.jpg"
import kelingking from "../assets/simon-spring-31g-OHQByK8-unsplash.jpg"

export default function Info(){
    
    return(
        <>
        <div className="h-full w-[55%] grid grid-cols-1 absolute ml-[23%] ">
            <div className="flex w-full h-[90%]">
                <div className="bg-slate-200 w-[50%]">
                    <img className="h-full w-full object-cover" src={kelingking} />
                </div>
                <div className="rounded shadow-2xl h-[85%] w-[50%] px-4 bg-neutral-100">
                    <p className="text-black text-3xl h-[20%] pt-2">Overview</p>
                    <p className="h-[70%] w-full flex items-center text-slate-400">Indonesia,officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea.</p>
                </div>
            </div>
            <div className="flex w-full h-[90%]">
                <div className="rounded shadow-2xl h-[85%] w-[50%] px-4 bg-neutral-100">
                    <p className="text-black text-3xl h-[20%] pt-2">Geographic</p>
                    <p className="h-[70%] w-full flex  items-center text-slate-400">Indonesia is the world's largest archipelagic state and the 14th-largest country by area, at 1,904,569 square kilometres (735,358 square miles).</p>
                </div>
                <div className="bg-slate-200 w-[50%]">
                    <img className="h-full w-full object-cover" src="https://i.pinimg.com/originals/2d/fb/4b/2dfb4beea281d0ff16b59ec2b0f6fc81.jpg" />
                </div>
            </div>
            <div className="flex w-full h-[90%]">
                <div className="bg-slate- w-[50%] h-full bg-slate-700">
                    <img className="h-full w-full object-cover" src={sumatra} />
                </div>
                <div className="rounded shadow-2xl h-[80%] w-[50%] px-4 bg-neutral-100">
                    <p className="text-black text-3xl h-[20%] pt-2">Ethnicity</p>
                    <p className="h-[70%] w-full flex items-center text-slate-400">With over 280 million people, Indonesia is the world's fourth-most-populous country and the most populous Muslim-majority country. Java, the world's most populous island, is home to more than half of the country's population.</p>
                </div>
            </div>
        </div>
        </>
    )
}