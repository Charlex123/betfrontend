import React from "react";
import DateTimePickerValue from "../../DateTimePickerValue";

const PanelFilter=()=> {
  return(
    <div className=" w-full px-2 py-3 flex flex-col gap-2 bg-[#e0e6e6] mt-3 border-b border-[#7e97a7]">
      <div className=" flex gap-3">
        <div className=' flex gap-2 items-center'>
          <label className=" text-xs lg:text-sm">Time Zone</label>
          
            <select className=" w-32" name="timezone" id="timezone">
              <option value="Pacific/Midway">Pacific/Midway(GMT-11:00)</option>
              <option value="Pacific/Honolulu GMT-10:00">Pacific/Honolulu(GMT-10:00)</option>
              <option value="America/Juneau GMT-9:00">America/Juneau(GMT-9:00)</option>
              <option value="America/Los_Angeles GMT-8:00">America/Los_Angeles(GMT-8:00)</option>
              <option value="Europe/London GMT+0:00">Europe/London(GMT+0:00)</option>
              <option value="Europe/Paris GMT+1:00">Europe/Paris(GMT+1:00)</option>
              <option value="Africa/Cairo GMT+2:00">Africa/Cairo(GMT+2:00)</option>
              <option value="Asia/Qatar GMT+3:00">Asia/Qatar(GMT+3:00)</option>
              <option value="Asia/Dubai GMT+4:00">Asia/Dubai(GMT+4:00)</option>
              <option value="Asia/Karachi GMT+5:00">Asia/Karachi(GMT+5:00)</option>
              <option value="IST GMT+5:30">IST(Bangalore / Bombay / New Delhi)(GMT+5:30)</option>
              <option value="Asia/Kathmandu GMT+5:45">Asia/Kathmandu(GMT+5:45)</option>
              <option value="Asia/Colombo GMT+6:00">Asia/Colombo(GMT+6:00)</option>
              <option value="Asia/Katmandu GMT+5:45">Asia/Katmandu(GMT+5:45)</option>
              <option value="Asia/Almaty GMT+6:00">Asia/Almaty(GMT+6:00)</option>
              <option value="Asia/Bangkok GMT+7:00">Asia/Bangkok(GMT+7:00)</option>
              <option value="Asia/Hong_Kong GMT+8:00">Asia/Hong_Kong(GMT+8:00)</option>
              <option value="Asia/Tokyo GMT+9:00">Asia/Tokyo(GMT+9:00)</option>

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
        <button className=" px-2 py-1 text-xs bg-white border border-slate-400 rounded hover:bg-primary hover:text-white">Just for Today</button>
        <button className=" px-2 py-1 text-xs bg-white border border-slate-400 rounded hover:bg-primary hover:text-white">Just for Today</button>
      </div>
    </div>
  )
}

export default PanelFilter