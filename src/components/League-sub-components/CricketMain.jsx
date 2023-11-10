import React, { useState } from "react";
import AlphaFilter from "../Filters/AlphaFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const CricketMain = () => {
  const [trigger,setTrigger]=useState(false)
  const [trigger2,setTrigger2]=useState(false)
  const handleActiveItemChange = (activeItem) => {
    console.log('Active Item:', activeItem);
  };

  const handleTrigger= () => {
    setTrigger(!trigger);
  }

  const handleTrigger2= () => {
    setTrigger2(!trigger2);
  }

  const popularMatches = [
    "International Twenty20 Matches",
    "T20 Blast",
    "One Day Internationals",
    "Test Matches",
  ];

  const restWorld = [
    "County",
    "PSL",
    "Vitality Blast",
    "Big Bash",
  ];

  const matchList = [
    "Bangladesh vs Afghanistan",
    "England vs Australia"
  ];

  const odds = [
    "Match Odds"
  ]


  return (
    <div>
      <div className="px-4 py-2 flex gap-3">
        <AlphaFilter onActiveItemChange={handleActiveItemChange} />
        <div className='flex flex-col gap-3 w-full'>
          <div>
            <div className="text-lg font-semibold text-[#1e1e1e] ml-2 mb-2">Popular</div>
            <div className="bg-white rounded-xl">
              {popularMatches.map((match, index) => (
                <div
                  key={index}
                  className="px-4 py-4 flex justify-between items-center border-b border-gray-200 cursor-pointer"
                  onClick={handleTrigger}
                >
                  <p className="text-lg font-semibold text-[#1e1e1e]">{match}</p>
                  <div>
                    <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-lg font-semibold text-[#1e1e1e] ml-2 mb-2">Rest of the World</div>
            <div className="bg-white rounded-xl">
              {restWorld.map((match, index) => (
                <div
                  key={index}
                  className="px-4 py-4 flex justify-between items-center border-b border-gray-200 cursor-pointer" 
                >
                  <p className="text-lg font-semibold text-[#1e1e1e]">{match}</p>
                  <div>
                    <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-sm" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>    
      {trigger && <div className=" fixed left-0 right-0 top-[51px] bottom-[78px] max-w-[480px] mx-auto  bg-[#EEF6FB] z-50 overflow-y-scroll">
        <header className=" bg-black px-3 h-12 flex items-center gap-4 text-lg font-semibold text-white">
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleTrigger} />
          <div>International Twenty20 Matches</div>
        </header>
        <div className=" px-4 flex gap-3 p-2">
          <div className='flex flex-col gap-3 w-full'>
            <div>
              <div className="bg-white rounded-xl">
                {matchList.map((match, index) => (
                  <div
                    key={index}
                    className="px-4 py-4 flex justify-between items-center border-b border-gray-200 cursor-pointer" 
                    onClick={handleTrigger2}
                  >
                    <p className="text-lg font-semibold text-[#1e1e1e]">{match}</p>
                    <div>
                      <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-sm" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> }
      {trigger2 && <div className=" fixed left-0 right-0 top-[51px] bottom-[78px] max-w-[480px] mx-auto  bg-[#EEF6FB] z-50 overflow-y-scroll">
        <header className=" bg-black px-3 h-12 flex items-center gap-4 text-lg font-semibold text-white">
          <FontAwesomeIcon icon={faArrowLeft} onClick={handleTrigger2} />
          <div>England vs Australia</div>
        </header>
        <div className=" px-4 flex gap-3 p-2">
          <div className='flex flex-col gap-3 w-full'>
            <div className=" bg-white rounded-xl">
              <Link to="/match-details" className="bg-white rounded-xl">
                {odds.map((match, index) => (
                  <div
                    key={index}
                    className="px-4 py-4 flex justify-between items-center border-b border-gray-200 cursor-pointer" 
                    onClick={handleTrigger2}
                  >
                    <p className="text-lg font-semibold text-[#1e1e1e]">{match}</p>
                    <div>
                      <FontAwesomeIcon icon={faArrowRight} className="text-gray-500 text-sm" />
                    </div>
                  </div>
                ))}
              </Link>
            </div>
          </div>
        </div>
      </div> }
    </div>  
  );
}

export default CricketMain;
