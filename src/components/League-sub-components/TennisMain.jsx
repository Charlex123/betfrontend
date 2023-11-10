import React from "react";
import AlphaFilter from "../Filters/AlphaFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const TennisMain = () => {
  const handleActiveItemChange = (activeItem) => {
    console.log('Active Item:', activeItem);
  };

  const popularMatches = [
    "UEFA Champions League",
    "Europa League",
    "Premier League",
    "La Liga",
  ];

  const restWorld = [
    "FIFA Soccer",
    "Italia A",
    "Pro League",
    "Serie A",
  ];


  return (
    <div className="px-4 py-2 flex gap-3">
      <AlphaFilter onActiveItemChange={handleActiveItemChange} />
      <div className='flex flex-col gap-3 w-full'>
        <div>
          <div className="text-lg font-semibold text-[#1e1e1e] ml-2 mb-2">Popular</div>
          <div className="bg-white rounded-xl">
            {popularMatches.map((match, index) => (
              <div
                key={index}
                className="px-4 py-4 flex justify-between items-center border-b border-gray-200"
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
                className="px-4 py-4 flex justify-between items-center border-b border-gray-200"
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
  );
}

export default TennisMain;
