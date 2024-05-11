import Image from "next/image";

import { FaTwitter,FaHashtag,FaHome,FaBookmark,FaUser} from "react-icons/fa"; 
import { MdNotificationAdd } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import { MdMore } from "react-icons/md";
import FeedCard from "@/components/FeedCard";

interface TwitterSideBarButton{
  title:string,
  icon:React.ReactNode;
}

const sideBarMenuItems :TwitterSideBarButton[]=[
  {title:"Home",icon:<FaHome />},
  {title:"Explore",icon:<FaHashtag />},
  {title:"Notification",icon:<MdNotificationAdd />},
  {title:"Messages",icon:<SiGooglemessages />},
  {title:"BookMark",icon:<FaBookmark />},
  {title:"Twitter Blue",icon:<MdMore />},
  {title:"Profile",icon:<FaUser />},
  {title:"More",icon:<MdMore />}

]
export default function Home() {
  return (
   <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56 ">
        <div className="col-span-3   pt-8  border-r-[1px] border-r-slate-600 px-2">
          <div className="text-4xl h-fit w-fit cursor-pointer transition-all p-2 hover:bg-slate-600 rounded-full">
        <FaTwitter />
        </div>
        <div className="mt-2 text-2 font-bold cursor-pointer  px-2 py-2 rounded-xl ">
          <ul>
            {
                sideBarMenuItems.map(item=><li className="flex hover:bg-slate-600 mt-3 py-3 px-2 justify-start items-center gap-2"><span>{item.icon}</span><span>{item.title}</span></li>)
            }
          </ul>
          <button className="bg-sky-500 w-full p-4 mt-2 hover:bg-sky-300 hover:text-black transition-all rounded-lg">Tweet</button>
        </div>
        </div>
        <div className="col-span-6">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>
        <div className="col-span-3 border-l-[1px] border-l-slate-600"></div>
      </div>
   </div>
  );
}
