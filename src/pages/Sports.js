import React, { useState} from "react";
import BottomNav from "../components/Navigations/BottomNav";
import HomeMarquee from "../components/HomeMarquee";
import SportsNav from "../components/Navigations/SportsNav";
import FilterNav from "../components/Navigations/FilterNav";
import Dropdown from "../components/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowDown, faArrowRight, faArrowUp, faStar } from '@fortawesome/free-solid-svg-icons';
import Accordion from "../components/Accordion";
import { Link } from "react-router-dom";


const Sports = () => {
  const [activeComponent, setActiveComponent] = useState('Cricket');
  const [allActive, setAllActive] = useState(false);
  const handleActiveComponent = (data) => {
    setActiveComponent(data);
  }

  return (
    <div>
      <HomeMarquee />
      <BottomNav bottomActive='Sports' />
      <FilterNav 
        switcherLabel="Parlay"
      />
      <SportsNav activeItem="Sports" onActiveItemChange={handleActiveComponent} />
      <div className="p-2 flex justify-between">
        <Dropdown />
        <button 
          className="flex gap-2 items-center bg-white px-4 py-2 text-sm rounded-md font-normal text-gray-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          onClick={() => setAllActive(!allActive)}
        >
          All
          <FontAwesomeIcon icon={allActive ? faArrowUp : faArrowDown } className="text-gray-600"/> 
        </button>
      </div>

      <div className="p-2.5">
        <div className=" flex justify-between items-center mb-3">
          <div className=" flex gap-3 items-center">
            <span className=" w-1 h-6 rounded-sm bg-[#1e1e1e]"></span>
            <h2 className=" font-semibold text-[#1e1e1e] text-xl">Cricket</h2>
          </div>
          <button 
            className="flex gap-2 items-center bg-white px-4 py-2 text-sm rounded-md font-normal text-gray-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            onClick={() => setAllActive(!allActive)}
          >
              All
            <FontAwesomeIcon icon={allActive ? faArrowUp : faArrowDown } className="text-gray-600"/> 
          </button>
        </div>
        <div className=" flex flex-col gap-1">
          <Accordion count="2" heading="Test Matches">
            <Link to="/match-details" className=" flex items-center justify-between cursor-pointer">
              <div className=" flex gap-2 items-center">
                <FontAwesomeIcon icon={ faStar} className=" text-gray-400 text-xl" />
                <div className=" flex flex-col justify-start gap-[2px]">
                  <div className=" flex gap-1">
                    <div className=" px-1 py-[1px] text-white bg-green-500 text-[10px] font-semibold">In-Play</div>
                  </div>
                  <div className=" text-base">SriLanka - Pakistan</div>
                </div>
              </div>
              <div className=" flex items-center gap-3 text-primary font-semibold">
                <div className=" text-xl">0 : 0</div>
                <FontAwesomeIcon icon={faAngleRight} className=" text-lg text-gray-400" />
              </div>
            </Link>
          </Accordion>
          <Accordion count="2" heading="Test Matches">
            <div className=" flex flex-col gap-2">
              <div className=" flex items-center justify-between">
                <div className=" flex gap-2 items-center">
                  <FontAwesomeIcon icon={ faStar} className=" text-gray-400 text-xl" />
                  <div className=" flex flex-col justify-start gap-[2px]">
                    <div className=" flex gap-1">
                      <div className=" px-1 py-[1px] text-white bg-green-500 text-[10px] font-semibold">In-Play</div>
                    </div>
                    <div className=" text-base">SriLanka - Pakistan</div>
                  </div>
                </div>
                <div className=" flex items-center gap-3 text-primary font-semibold">
                  <div className=" text-xl">0 : 0</div>
                  <FontAwesomeIcon icon={faAngleRight} className=" text-lg text-gray-400" />
                </div>
              </div>
              <div className=" flex flex-col gap-[1px] rounded-md">
                <div className=" bg-primary rounded-t-md flex justify-between items-center">
                  <div className=" flex items-baseline gap-1 text-white ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Match Odds</div>
                    <div className=" text-sm font-normal ml-1">Matched <span className="font-semibold">56,6900</span></div>
                  </div>
                  <div className=" h-5/6 border-l text-white border-white flex items-center text-sm w-4/12">
                    <p className=" w-1/2 text-center">Back</p>
                    <p className=" w-1/2 text-center">Lay</p>
                  </div>
                </div>
                <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                  <div className=" ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Sri Lanka</div>
                  </div>
                  <div className=" h-5/6 flex items-center gap-[2px] text-sm w-4/12 relative">
                    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-blue-400 bg-opacity-80 rounded-md flex items-center justify-center font-semibold">Suspended</div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-400 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-pink-300 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                  <div className=" ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Sri Lanka</div>
                  </div>
                  <div className=" h-5/6 flex items-center gap-[2px] text-sm w-4/12">
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-400 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-pink-300 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                  <div className=" ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Sri Lanka</div>
                  </div>
                  <div className=" h-5/6 flex items-center gap-[2px] text-sm w-4/12">
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-400 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-pink-300 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
        </div>      
      </div>
      <div className="p-2.5">
        <div className=" flex justify-between items-center mb-3">
          <div className=" flex gap-3 items-center">
            <span className=" w-1 h-6 rounded-sm bg-[#1e1e1e]"></span>
            <h2 className=" font-semibold text-[#1e1e1e] text-xl">Football</h2>
          </div>
          <button 
            className="flex gap-2 items-center bg-white px-4 py-2 text-sm rounded-md font-normal text-gray-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            onClick={() => setAllActive(!allActive)}
          >
              All
            <FontAwesomeIcon icon={allActive ? faArrowUp : faArrowDown } className="text-gray-600"/> 
          </button>
        </div>
        <div className=" flex flex-col gap-1">
          <Accordion count="2" heading="Test Matches">
            <Link to="/match-details" className=" flex items-center justify-between cursor-pointer">
              <div className=" flex gap-2 items-center">
                <FontAwesomeIcon icon={ faStar} className=" text-gray-400 text-xl" />
                <div className=" flex flex-col justify-start gap-[2px]">
                  <div className=" flex gap-1">
                    <div className=" px-1 py-[1px] text-white bg-green-500 text-[10px] font-semibold">In-Play</div>
                  </div>
                  <div className=" text-base">SriLanka - Pakistan</div>
                </div>
              </div>
              <div className=" flex items-center gap-3 text-primary font-semibold">
                <div className=" text-xl">0 : 0</div>
                <FontAwesomeIcon icon={faAngleRight} className=" text-lg text-gray-400" />
              </div>
            </Link>
          </Accordion>
          <Accordion count="2" heading="Test Matches">
            <div className=" flex flex-col gap-2">
              <div className=" flex items-center justify-between">
                <div className=" flex gap-2 items-center">
                  <FontAwesomeIcon icon={ faStar} className=" text-gray-400 text-xl" />
                  <div className=" flex flex-col justify-start gap-[2px]">
                    <div className=" flex gap-1">
                      <div className=" px-1 py-[1px] text-white bg-green-500 text-[10px] font-semibold">In-Play</div>
                    </div>
                    <div className=" text-base">SriLanka - Pakistan</div>
                  </div>
                </div>
                <div className=" flex items-center gap-3 text-primary font-semibold">
                  <div className=" text-xl">0 : 0</div>
                  <FontAwesomeIcon icon={faAngleRight} className=" text-lg text-gray-400" />
                </div>
              </div>
              <div className=" flex flex-col gap-[1px] rounded-md">
                <div className=" bg-primary rounded-t-md flex justify-between items-center">
                  <div className=" flex items-baseline gap-1 text-white ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Match Odds</div>
                    <div className=" text-sm font-normal ml-1">Matched <span className="font-semibold">56,6900</span></div>
                  </div>
                  <div className=" h-5/6 border-l text-white border-white flex items-center text-sm w-4/12">
                    <p className=" w-1/2 text-center">Back</p>
                    <p className=" w-1/2 text-center">Lay</p>
                  </div>
                </div>
                <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                  <div className=" ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Sri Lanka</div>
                  </div>
                  <div className=" h-5/6 flex items-center gap-[2px] text-sm w-4/12 relative">
                    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-blue-400 bg-opacity-80 rounded-md flex items-center justify-center font-semibold">Suspended</div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-400 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-pink-300 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                  <div className=" ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Sri Lanka</div>
                  </div>
                  <div className=" h-5/6 flex items-center gap-[2px] text-sm w-4/12">
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-400 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-pink-300 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                  <div className=" ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Sri Lanka</div>
                  </div>
                  <div className=" h-5/6 flex items-center gap-[2px] text-sm w-4/12">
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-400 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-pink-300 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
        </div>      
      </div>   
      <div className="p-2.5">
        <div className=" flex justify-between items-center mb-3">
          <div className=" flex gap-3 items-center">
            <span className=" w-1 h-6 rounded-sm bg-[#1e1e1e]"></span>
            <h2 className=" font-semibold text-[#1e1e1e] text-xl">Tennis</h2>
          </div>
          <button 
            className="flex gap-2 items-center bg-white px-4 py-2 text-sm rounded-md font-normal text-gray-700 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            onClick={() => setAllActive(!allActive)}
          >
              All
            <FontAwesomeIcon icon={allActive ? faArrowUp : faArrowDown } className="text-gray-600"/> 
          </button>
        </div>
        <div className=" flex flex-col gap-1">
          <Accordion count="2" heading="Test Matches">
            <Link to="/match-details" className=" flex items-center justify-between cursor-pointer">
              <div className=" flex gap-2 items-center">
                <FontAwesomeIcon icon={ faStar} className=" text-gray-400 text-xl" />
                <div className=" flex flex-col justify-start gap-[2px]">
                  <div className=" flex gap-1">
                    <div className=" px-1 py-[1px] text-white bg-green-500 text-[10px] font-semibold">In-Play</div>
                  </div>
                  <div className=" text-base">SriLanka - Pakistan</div>
                </div>
              </div>
              <div className=" flex items-center gap-3 text-primary font-semibold">
                <div className=" text-xl">0 : 0</div>
                <FontAwesomeIcon icon={faAngleRight} className=" text-lg text-gray-400" />
              </div>
            </Link>
          </Accordion>
          <Accordion count="2" heading="Test Matches">
            <div className=" flex flex-col gap-2">
              <div className=" flex items-center justify-between">
                <div className=" flex gap-2 items-center">
                  <FontAwesomeIcon icon={ faStar} className=" text-gray-400 text-xl" />
                  <div className=" flex flex-col justify-start gap-[2px]">
                    <div className=" flex gap-1">
                      <div className=" px-1 py-[1px] text-white bg-green-500 text-[10px] font-semibold">In-Play</div>
                    </div>
                    <div className=" text-base">SriLanka - Pakistan</div>
                  </div>
                </div>
                <div className=" flex items-center gap-3 text-primary font-semibold">
                  <div className=" text-xl">0 : 0</div>
                  <FontAwesomeIcon icon={faAngleRight} className=" text-lg text-gray-400" />
                </div>
              </div>
              <div className=" flex flex-col gap-[1px] rounded-md">
                <div className=" bg-primary rounded-t-md flex justify-between items-center">
                  <div className=" flex items-baseline gap-1 text-white ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Match Odds</div>
                    <div className=" text-sm font-normal ml-1">Matched <span className="font-semibold">56,6900</span></div>
                  </div>
                  <div className=" h-5/6 border-l text-white border-white flex items-center text-sm w-4/12">
                    <p className=" w-1/2 text-center">Back</p>
                    <p className=" w-1/2 text-center">Lay</p>
                  </div>
                </div>
                <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                  <div className=" ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Sri Lanka</div>
                  </div>
                  <div className=" h-5/6 flex items-center gap-[2px] text-sm w-4/12 relative">
                    <div className=" absolute top-0 left-0 right-0 bottom-0 bg-blue-400 bg-opacity-80 rounded-md flex items-center justify-center font-semibold">Suspended</div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-400 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-pink-300 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                  <div className=" ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Sri Lanka</div>
                  </div>
                  <div className=" h-5/6 flex items-center gap-[2px] text-sm w-4/12">
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-400 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-pink-300 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                  <div className=" ml-2 w-9/12">
                    <div className=" text-lg font-semibold">Sri Lanka</div>
                  </div>
                  <div className=" h-5/6 flex items-center gap-[2px] text-sm w-4/12">
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-400 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                    <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-pink-300 rounded-md text-black">
                      <p className=" text-lg font-semibold">1.27</p>
                      <p className=" text-xs font-normal">8,413.3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion>
        </div>      
      </div>        
    </div>
  )
}

export default Sports;
