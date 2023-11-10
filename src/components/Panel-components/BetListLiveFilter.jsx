import React, { useState } from 'react';

const BetListLiveFilter=()=> {
  const [selectedSport, setSelectedSport] = useState('cricket');

  const handleSportChange = (event) => {
    setSelectedSport(event.target.value);
  };
  return(
    <div className=" w-full px-2 py-3 flex flex-col gap-2 bg-[#e0e6e6] mt-3 border-b border-[#7e97a7]">
      <div className=" flex gap-3">
      <div className="flex gap-2 items-center">
      <label className="text-xs lg:text-sm">Sport</label>
      <div className="flex gap-4">
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="sport"
            value="cricket"
            checked={selectedSport === 'cricket'}
            onChange={handleSportChange}
          />
          Cricket
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="sport"
            value="soccer"
            checked={selectedSport === 'soccer'}
            onChange={handleSportChange}
          />
          Soccer
        </label>
        <label className="flex items-center gap-1">
          <input
            type="radio"
            name="sport"
            value="tennis"
            checked={selectedSport === 'tennis'}
            onChange={handleSportChange}
          />
          Tennis
        </label>
      </div>
    </div>
      </div>
  
      <div className=' flex gap-2 items-center'>
        <label className=" text-xs lg:text-sm">Order of Display:</label>         
        <select className=" w-32" name="status" id="status">
          <option value="stake">Stake</option>
          <option value="id">Player ID</option>
          <option value="time">Time</option>
        </select>

        <p>of</p>

        <select className=" w-32" name="status" id="status">
          <option value="stake">Ascending</option>
          <option value="id">Descending</option>
        </select>

        <label className=" text-xs lg:text-sm">Last:</label>         
        <select className=" w-32" name="status" id="status">
          <option value="stake">25Txn</option>
          <option value="id">50Txn</option>
          <option value="time">100Txn</option>
        </select>

        <label className=" text-xs lg:text-sm">Auto Refresh(Seconds):</label>         
        <select className=" w-32" name="status" id="status">
          <option value="stake">Stop</option>
          <option value="id">60</option>
          <option value="time">30</option>
        </select>

        <label className=" text-xs lg:text-sm">Bet Status:</label>         
        <select className=" w-32" name="status" id="status">
          <option value="stake">All</option>
          <option value="id">60</option>
          <option value="time">30</option>
        </select>

        <button className=" px-2 py-1 text-xs  border-slate-400 rounded bg-primary hover:text-white">Refresh</button>         
        </div>
    </div>
  )
}

export default BetListLiveFilter