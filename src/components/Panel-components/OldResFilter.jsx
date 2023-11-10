import React from "react";
import DateTimePickerValue from "../DateTimePickerValue";

const OldResFilter=()=> {
  return(
    <div className=" w-full px-2 py-3 flex flex-col gap-2 bg-[#e0e6e6] mt-3 border-b border-[#7e97a7]">
      <div className=" flex gap-3">
        <div className=' flex gap-2 items-center'>
          <label className=" text-xs lg:text-sm">Sport</label>
          
            <select className=" w-32" name="sport" id="sport">
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
    </div>
  )
}

export default OldResFilter