import React, {useState} from "react";

const RiskManagement=()=> {
  const [activeTab, setActiveTab] = useState('Fancybet');
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className=" py-3 flex flex-col gap-3">
      <h2 className=" text-lg font-semibold">Risk Management Summary</h2>
      <div>
        <div className="rounded-t-lg bg-black px-4 pt-2 flex">
          <div
            className={`px-6 py-2 rounded-t-lg ${activeTab === 'matched' ? 'bg-primary' : 'bg-primary-dark'} text-white cursor-pointer`}
            onClick={() => handleTabClick('matched')}
          >
            Top 10 Matched Amount Player
          </div>
          <div
            className={`px-6 py-2 rounded-t-lg ${activeTab === 'exposure' ? 'bg-primary' : 'bg-primary-dark'} text-white cursor-pointer`}
            onClick={() => handleTabClick('exposure')}
          >
            Top 10 Exposure Player
          </div>               
        </div>
        <div className=" bg-white flex items-center justify-between text-xs lg:text-sm px-5 py-3">
          <p>UID</p>
          <div className=" flex items-center gap-3"><p>Exposure</p><p>Matched Amount</p></div>
          <div className=" flex items-center gap-3"><p>Exposure</p><p>Matched Amount</p></div>
        </div>
      </div>
      <div className="match-wrap bg-gray-300 shadow-md rounded-lg py-2 px-4 mb-6">
        <h2 className=" text-lg font-semibold">Match Odds</h2>
        <div className=" flex flex-col gap-3">
          <div>
            <div className=" bg-gray-200 flex justify-between items-center px-3 border-y border-gray-500">
              <div className=" flex items-center gap-4">
                <p>Sports</p>
                <p>Market Date</p>
                <p>Event/Market Name</p>
              </div>
              <div className=" flex">
                <div className=" flex flex-col w-36">
                  <div className=" bg-gray-300 py-2 flex justify-center text-black border border-gray-500">Player P/L</div>
                  <div className=" bg-gray-300 py-2 justify-between text-black border border-gray-500 flex px-5">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
                </div>
                <div className=" flex items-center justify-center px-2">Downline P/L</div>
              </div>
            </div>
            <div className=" px-3 py-3 bg-white">No Data</div>
          </div>
          <div>
            <div className=" bg-gray-200 flex justify-between items-center px-3 border-y border-gray-500">
              <div className=" flex items-center gap-4">
                <p>Sports</p>
                <p>Market Date</p>
                <p>Event/Market Name</p>
              </div>
              <div className=" flex">
                <div className=" flex flex-col w-36">
                  <div className=" bg-gray-300 py-2 flex justify-center text-black border border-gray-500">Player P/L</div>
                  <div className=" bg-gray-300 py-2 justify-between text-black border border-gray-500 flex px-5">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
                </div>
                <div className=" flex items-center justify-center px-2">Downline P/L</div>
              </div>
            </div>
            <div className=" px-3 py-3 bg-white">No Data</div>
          </div>
        </div>
      </div>
      <div className="match-wrap bg-gray-300 shadow-md rounded-lg py-2 px-4 mb-6">
        <h2 className=" text-lg font-semibold">Match Odds</h2>
        <div className=" flex flex-col gap-3">
          <div>
            <div className=" bg-gray-200 flex justify-between items-center px-3 border-y border-gray-500">
              <div className=" flex items-center gap-4">
                <p>Sports</p>
                <p>Market Date</p>
                <p>Event/Market Name</p>
              </div>
              <div className=" flex">
                <div className=" flex flex-col w-36">
                  <div className=" bg-gray-300 py-2 flex justify-center text-black border border-gray-500">Player P/L</div>
                  <div className=" bg-gray-300 py-2 justify-between text-black border border-gray-500 flex px-5">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
                </div>
                <div className=" flex items-center justify-center px-2">Downline P/L</div>
              </div>
            </div>
            <div className=" px-3 py-3 bg-white">No Data</div>
          </div>
          <div>
            <div className=" bg-gray-200 flex justify-between items-center px-3 border-y border-gray-500">
              <div className=" flex items-center gap-4">
                <p>Sports</p>
                <p>Market Date</p>
                <p>Event/Market Name</p>
              </div>
              <div className=" flex">
                <div className=" flex flex-col w-36">
                  <div className=" bg-gray-300 py-2 flex justify-center text-black border border-gray-500">Player P/L</div>
                  <div className=" bg-gray-300 py-2 justify-between text-black border border-gray-500 flex px-5">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                  </div>
                </div>
                <div className=" flex items-center justify-center px-2">Downline P/L</div>
              </div>
            </div>
            <div className=" px-3 py-3 bg-white">No Data</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RiskManagement