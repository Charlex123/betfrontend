import React from "react";
import Marquee from "react-fast-marquee";
import announcement from "../../assets/icons/microphone-white.png"

const PanelMarquee = () => {
  return (
    <div className="relative bg-[#1c282d] py-1 rounded">
      <div className=" bg-[#1c282d] absolute left-0 px-4 z-10 border-r border-[#6ac2ff]">
        <img src={announcement} alt="announcement" className=" w-5 h-5" />
      </div>
      <Marquee>
        <ul className=" flex gap-10 text-[12px] font-semibold text-[#6ac2ff]">
          <li>অফিসিয়াল এজেন্ট লিষ্ট   https://allagentlist.com/ma.php</li>
          <li>Once player account found with fraudulent ticket, the respective market will be voided and the player account will be locked.</li>
          <li>WELCOME TO MegaBets ! ENJOY BETTING IN MATCH ODDS, FANCY & LIVE CASINO</li>
        </ul>
      </Marquee>
    </div>
  )
};

export default PanelMarquee;