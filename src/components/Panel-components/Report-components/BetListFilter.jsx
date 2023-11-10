import React from "react";
import DateTimePickerValue from "../../DateTimePickerValue";

const BetListFilter=()=> {
  return(
    <div className=" w-full px-2 py-3 flex flex-col gap-2 bg-[#e0e6e6] mt-3 border-b border-[#7e97a7]">
      <div className=" flex gap-3">
        <div className=' flex gap-2 items-center'>
          <label className=" text-xs lg:text-sm">Sport</label>
          
            <select className=" w-32 text-xs lg:text-sm" name="sport" id="sport">
              <option value="cricket">Cricket</option>
              <option value="soccer">Soccer</option>
              <option value="tennis">Tennis</option>
            </select>
                  
        </div>
        <div className=' flex gap-2 items-center'>
          <label className=" text-xs lg:text-sm">Period</label>
          <DateTimePickerValue/>
          <p>to</p>
          <DateTimePickerValue/>
        </div>
      </div>
      <div className=" flex gap-2">
        <button className=" px-2 py-1 text-xs bg-white border border-slate-400 rounded hover:bg-primary hover:text-white">Just for Today</button>
        <button className=" px-2 py-1 text-xs bg-white border border-slate-400 rounded hover:bg-primary hover:text-white">From Yesterday</button>
        <button className=" px-2 py-1 text-xs  border-slate-400 rounded bg-primary hover:text-white">Get Matches</button>
      </div>
      <div className=' flex gap-2 items-center'>
          <label className=" text-xs lg:text-sm">Bet Status :</label>
          
            <select className="text-xs lg:text-sm w-32" name="status" id="status">
              <option value="cricket">Settled</option>
              <option value="soccer">Cancelled</option>
              <option value="tennis">Voided</option>
            </select>

        <button className=" px-2 py-1 text-xs  border-slate-400 rounded bg-primary hover:text-white">Filter Bets</button>

                  
        </div>
    </div>
  )
}

export default BetListFilter