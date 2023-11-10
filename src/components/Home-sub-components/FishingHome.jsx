import React from "react";
import Sidebar from "./Sidebar";
import game from "../../assets/images/game.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FishingHome(){
  const handleActiveItemChange = (activeItem) => {
    console.log('Active Item:', activeItem);
  };
  return (
    <div className=" flex">
      <Sidebar activeItem="FishingHome" onActiveItemChange={handleActiveItemChange} />
      <div className="flex flex-col gap-3 w-full relative">
        <div className="relative px-2">
          <div className=" relative grid grid-cols-3 gap-2 pt-0 w-full z-30">
            <div className="w-full rounded-xl">
              <img className="w-full h-full object-cover rounded-xl" src={game} alt="game" />
            </div>
            <div className="w-full rounded-xl">
              <img className="w-full h-full object-cover rounded-xl" src={game} alt="game" />
            </div>
            <div className="w-full rounded-xl">
              <img className="w-full h-full object-cover rounded-xl" src={game} alt="game" />
            </div>
            <div className="w-full rounded-xl">
              <img className="w-full h-full object-cover rounded-xl" src={game} alt="game" />
            </div>
            <div className="w-full rounded-xl">
              <img className="w-full h-full object-cover rounded-xl" src={game} alt="game" />
            </div>
            <div className="w-full rounded-xl">
              <img className="w-full h-full object-cover rounded-xl" src={game} alt="game" />
            </div>
          </div>
        </div>
        <button className=" bg-gray-900 text-white flex items-center justify-center px-4 py-2 mx-auto rounded mt-4">Show More <FontAwesomeIcon icon={faArrowRight} className=" ml-2" /> </button>
      </div>
    </div>
  );
}