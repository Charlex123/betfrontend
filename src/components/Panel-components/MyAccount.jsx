import React,{useState} from "react";
import MyAccountNav from "./MyAccountNav";
import PanelInfoBar from "./PanelInfoBar";
import PanelTable from "./PanelTable";
import MyAccountProfile from "./MyAccountProfile";

const MyAccount=()=>{
  const [activeComponent, setActiveComponent] = useState('Account Statement');
  const handleActiveComponent = (data) => {
    setActiveComponent(data);
  }
  return(
    <div className=" py-4">
      <div className=" mb-4 px-3 py-2 bg-slate-300 flex items-center justify-center text-lg font-semibold w-24 rounded-md">User99</div>
      <div className=" flex items-start gap-3">
        <div><MyAccountNav activeItem="MyAccount" onActiveItemChange={handleActiveComponent} /></div>
        <div className=" w-full">
          <h2 className=" text-xl text-[#1e1e1e] mb-3 font-semibold">{activeComponent}</h2>
          {
            activeComponent === "Account Statement" && 
            <PanelTable/>
          }
          {
            activeComponent === "Account Summary" && 
            <PanelInfoBar/>
          }
          {
            activeComponent === "Profile" && 
            <MyAccountProfile/>
          }
          {
            activeComponent === "Activity Log" && 
            <PanelTable/>
          }
        </div>
      </div>
    </div>
  )
}

export default MyAccount