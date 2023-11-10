import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-cropped.png"
import SignUpNav from "../components/Navigations/SignupNav";
import HomeSignup from "../components/Signup-sub-components/HomeSignup";
import Service from "../components/Signup-sub-components/Service";
import AdminPage from "../components/Signup-sub-components/AdminPage";
import SuperPage from "../components/Signup-sub-components/SuperPage";
import MasterPage from "../components/Signup-sub-components/MasterPage";
import OldPage from "../components/Signup-sub-components/OldPage";

const Signup = () => {
  const [activeComponent, setActiveComponent] = useState('Home');
  const handleActiveItemChange = (activeItem) => {
    console.log('Active Item:', activeItem);
    setActiveComponent(activeItem);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-primary z-50 overflow-y-auto overflow-x-auto">
  <div className="max-w-3xl w-full mx-auto py-6 flex flex-col gap-5 items-center">
    <div className=""><Link to="/home"><img src={logo} alt="logo" className=" w-20 lg:w-40" /></Link></div>
    <div className="w-full h-9  text-[8px] lg:text-sm"><SignUpNav activeItem="Signup" onActiveItemChange={handleActiveItemChange} /></div>
    <div className="py-3 px-1 md:px-8 w-full">
      {activeComponent === "Home" && <HomeSignup />}
      {activeComponent === "Service" && <Service />}
      {activeComponent === "Admin" && <AdminPage />}
      {activeComponent === "Super" && <SuperPage />}
      {activeComponent === "Master" && <MasterPage />}
      {activeComponent === "Old/New" && <OldPage />}
    </div>
  </div>
</div>
  )

}

export default Signup