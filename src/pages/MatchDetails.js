import React, { useState } from 'react';
import Header from "../components/Header";
import Accordion from "../components/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsUpDown, faChartBar, faStar } from "@fortawesome/free-solid-svg-icons";
import DetailTableFilter from '../components/Filters/DetailTableFilter';
import Footer from '../components/Footer';
import SportAccordion from '../components/SportAccordion';

const MatchDetails = ()=> {
  const [activeTab, setActiveTab] = useState('Fancybet');
  const [activeComponent, setActiveComponent] = useState('Fancybet');
  const handleActiveComponent = (data) => {
    setActiveComponent(data);
  }

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 w-[480px] mx-auto z-50 bg-[#eef6fb] pb-10 overflow-y-auto">
      <Header showBackButton={true} />
      <div className=" ">
        <div className=" bg-[#1e1e1e] w-full p-2.5 flex justify-between items-center">
          <p className=" text-white text-lg font-semibold">Exchange</p>
          <p className=" text-primary text-sm font-semibold"><span className=" font-normal mr-1">Matched</span>PTE 40,166,111</p>
        </div>
        <div className=" bg-white">
          <div className=" bg-primary w-full p-2.5"><h2 className=" text-xl text-black w-fit border-b-[3px] border-black"><FontAwesomeIcon icon={faStar} className=" text-xl text-[#1e1e1e] mr-1" />Match Odds</h2></div>
          <div className=" p-2.5 flex flex-col gap-[2px]">
            <div className=" flex">
              <div className=" w-9/12"></div>
              <div className=" h-5/6 text-black flex items-center text-sm w-4/12">
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
            <div className=" flex items-center">
              <div className=" w-9/12">
                <div className=" px-2 py-1 bg-black rounded text-white text-sm font-semibold w-fit"><FontAwesomeIcon icon={faChartBar} className=" text-sm mr-2" />Market Depth</div>
              </div>
              <div className=" h-5/6 gap-2 flex justify-center items-center text-sm text-gray-500 w-4/12">
                <FontAwesomeIcon icon={faArrowsUpDown}/>
                <p>min/max</p>
                <p className=" font-semibold">1/1,000</p>
              </div>
            </div> 
          </div>
        </div>
        <div className=" p-2.5">
          <Accordion count="2" heading="Bookmaker">
            <div className=" flex flex-col gap-[2px]">
                <div className=" flex">
                  <div className=" w-9/12"></div>
                  <div className=" h-5/6 text-black flex items-center text-sm w-4/12">
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
                <div className=" flex items-center">
                  <div className=" w-9/12">
                    <div className=" px-2 py-1 bg-black rounded text-white text-sm font-semibold w-fit"><FontAwesomeIcon icon={faChartBar} className=" text-sm mr-2" />Market Depth</div>
                  </div>
                  <div className=" h-5/6 gap-2 flex justify-center items-center text-sm text-gray-500 w-4/12">
                    <FontAwesomeIcon icon={faArrowsUpDown}/>
                    <p>min/max</p>
                    <p className=" font-semibold">1/1,000</p>
                  </div>
                </div> 
            </div>
          </Accordion>
          <div>
            <div className="rounded-t-lg bg-black px-4 pt-2 flex">
                <div
                  className={`px-6 py-2 rounded-t-lg ${activeTab === 'Fancybet' ? 'bg-primary' : 'bg-primary-dark'} text-white cursor-pointer`}
                  onClick={() => handleTabClick('Fancybet')}
                >
                  Fancybet
                </div>
                <div
                  className={`px-6 py-2 rounded-t-lg ${activeTab === 'Sportsbook' ? 'bg-primary' : 'bg-primary-dark'} text-white cursor-pointer`}
                  onClick={() => handleTabClick('Sportsbook')}
                >
                  Sportsbook
                </div>               
            </div>
            {activeTab === 'Fancybet' && 
              <div>
                <DetailTableFilter activeItem='Fancybet' onActiveItemChange={handleActiveComponent} />
                <div className=" p-2.5 flex flex-col gap-[2px] bg-white">
                  <div className=" flex">
                    <div className=" w-9/12"></div>
                    <div className=" h-5/6 text-black flex items-center text-sm w-4/12">
                      <p className=" w-1/2 text-center">No</p>
                      <p className=" w-1/2 text-center">Yes</p>
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
                  <div className=" flex items-center">
                    <div className=" w-9/12">
                    </div>
                    <div className=" h-5/6 gap-2 flex justify-center items-center text-sm text-gray-500 w-4/12">
                      <FontAwesomeIcon icon={faArrowsUpDown}/>
                      <p>min/max</p>
                      <p className=" font-semibold">1/1,000</p>
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
                  <div className=" flex items-center">
                    <div className=" w-9/12">
                    </div>
                    <div className=" h-5/6 gap-2 flex justify-center items-center text-sm text-gray-500 w-4/12">
                      <FontAwesomeIcon icon={faArrowsUpDown}/>
                      <p>min/max</p>
                      <p className=" font-semibold">1/1,000</p>
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
                  <div className=" flex items-center">
                    <div className=" w-9/12">
                    </div>
                    <div className=" h-5/6 gap-2 flex justify-center items-center text-sm text-gray-500 w-4/12">
                      <FontAwesomeIcon icon={faArrowsUpDown}/>
                      <p>min/max</p>
                      <p className=" font-semibold">1/1,000</p>
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
                  <div className=" flex items-center">
                    <div className=" w-9/12">
                    </div>
                    <div className=" h-5/6 gap-2 flex justify-center items-center text-sm text-gray-500 w-4/12">
                      <FontAwesomeIcon icon={faArrowsUpDown}/>
                      <p>min/max</p>
                      <p className=" font-semibold">1/1,000</p>
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
                  <div className=" flex items-center">
                    <div className=" w-9/12">
                    </div>
                    <div className=" h-5/6 gap-2 flex justify-center items-center text-sm text-gray-500 w-4/12">
                      <FontAwesomeIcon icon={faArrowsUpDown}/>
                      <p>min/max</p>
                      <p className=" font-semibold">1/1,000</p>
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
                  <div className=" flex items-center">
                    <div className=" w-9/12">
                    </div>
                    <div className=" h-5/6 gap-2 flex justify-center items-center text-sm text-gray-500 w-4/12">
                      <FontAwesomeIcon icon={faArrowsUpDown}/>
                      <p>min/max</p>
                      <p className=" font-semibold">1/1,000</p>
                    </div>
                  </div> 
                </div>
              </div>
            }
            {activeTab === 'Sportsbook' && 
              <div>
                <DetailTableFilter activeItem='Sportsbook' onActiveItemChange={handleActiveComponent} />
                <div className=" p-2.5 flex flex-col gap-[2px] bg-white">
                  <SportAccordion heading="First Over">
                    <div className=" bg-[#eef6fb] rounded-t-md flex justify-between items-center text-black">
                      <div className=" h-5/6 flex items-center gap-[2px] text-sm w-full">
                        <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-300 rounded-b-md text-black">
                          <p className=" text-lg font-semibold">1.27</p>
                          <p className=" text-xs font-normal">8,413.3</p>
                        </div>
                        <div className=" w-1/2 py-1 flex flex-col items-center justify-center bg-blue-300 rounded-b-md text-black">
                          <p className=" text-lg font-semibold">1.27</p>
                          <p className=" text-xs font-normal">8,413.3</p>
                        </div>
                      </div>
                    </div>
                  </SportAccordion>                                      
                </div>
              </div>
            }
          </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  )
}

export default MatchDetails