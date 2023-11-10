import React from "react";
import Sidebar from "./Sidebar";
import game from "../../assets/images/game.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function LiveHome() {
  const handleActiveItemChange = (activeItem) => {
    console.log('Active Item:', activeItem);
  };

  return (
    <div className="flex">
      <Sidebar activeItem="LiveHome" onActiveItemChange={handleActiveItemChange} />
      <div className="flex flex-col gap-3 w-full relative">
        <div className="relative px-2 mb-4">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#d4e0e5] to-[#eef6fb] z-10"></div>
          <header className="flex items-center text-lg font-bold px-2 h-6 relative z-20 my-4">
            <div className="inline-flex w-1 h-6 bg-black mr-3 rounded-lg"></div>
            <span>Game Shows</span>
          </header>
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
        <div className="relative px-2 mb-4">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#d4e0e5] to-[#eef6fb] z-10"></div>
          <header className="flex items-center text-lg font-bold px-2 h-6 relative z-20 my-4">
            <div className="inline-flex w-1 h-6 bg-black mr-3 rounded-lg"></div>
            <span>Baccarat</span>
          </header>
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
        <div className="relative px-2 mb-4">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#d4e0e5] to-[#eef6fb] z-10"></div>
          <header className="flex items-center text-lg font-bold px-2 h-6 relative z-20 my-4">
            <div className="inline-flex w-1 h-6 bg-black mr-3 rounded-lg"></div>
            <span>Roulette</span>
          </header>
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
        <div className="relative px-2 mb-4">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#d4e0e5] to-[#eef6fb] z-10"></div>
          <header className="flex items-center text-lg font-bold px-2 h-6 relative z-20 my-4">
            <div className="inline-flex w-1 h-6 bg-black mr-3 rounded-lg"></div>
            <span>Dice</span>
          </header>
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
        <button className=" bg-gray-900 text-white flex items-center justify-center px-4 py-2 mx-auto rounded">Show More <FontAwesomeIcon icon={faArrowRight} className=" ml-2" /> </button>
      </div>
    </div>
  );
}
