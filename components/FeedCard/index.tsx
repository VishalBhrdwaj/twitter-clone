import Image from "next/image";
import React from "react"
import { BiMessage } from "react-icons/bi";
import { AiOutlineRetweet } from "react-icons/ai";
import { GiGlassHeart } from "react-icons/gi";
import { TbUpload } from "react-icons/tb";

const FeedCard:React.FC=()=>{
    return <div>
        <div className="grid border-r-0 border-l-0 border-t-0 grid-cols-12 border border-gray-600 p-4 hover:bg-slate-900 cursor-pointer transition-all">
            <div className="col-span-2 rounded-full">
                <Image className="rounded-full" alt ={"No Image found"} height={50} width={50} src={"https://avatars.githubusercontent.com/u/88134443?v=4"}/>
            </div>
            <div className="col-span-10">
               <h5>Vishal</h5>
               <p className="mt-2">Currently Working in Barclays and very passionate to work as a Frontend developer</p>
               <div className="grid grid-cols-12 mt-4">
                <div className="col-span-3 "><BiMessage /></div>
                <div className="col-span-3"> <AiOutlineRetweet /></div>
                <div className="col-span-3"> <GiGlassHeart /></div>
                <div className="col-span-3"> <TbUpload /></div>
                
               </div>
            </div>
        </div>
    </div>
}

export default FeedCard;