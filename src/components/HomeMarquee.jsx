import React from "react";
import Marquee from "react-fast-marquee";
import announcement from "../assets/icons/microphone.png"

const HomeMarquee = () => {
  return ( 
    <div className="relative bg-white py-1.5">
      <div className=" bg-white absolute left-0 px-4 z-10 border-r border-gray-300">
        <img src={announcement} alt="announcement" className=" w-5 h-5" />
      </div>
      <Marquee>
        <ul className=" flex gap-10 text-sm font-semibold text-[#1e1e1e]">
          <li>অফিসিয়াল এজেন্ট লিষ্ট   https://allagentlist.com/ma.php</li>
          <li>Once player account found with fraudulent ticket, the respective market will be voided and the player account will be locked.</li>
          <li>WELCOME TO MegaBets ! ENJOY BETTING IN MATCH ODDS, FANCY & LIVE CASINO</li>
        </ul>
      </Marquee>
    </div>
  )
};

export default HomeMarquee;