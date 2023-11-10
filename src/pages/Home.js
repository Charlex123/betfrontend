import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";
import HomeMarquee from "../components/HomeMarquee";
import HomeNav from "../components/Navigations/HomeNav";
import SportsHome from "../components/Home-sub-components/SportsHome";
import LiveHome from "../components/Home-sub-components/LiveHome";
import TableHome from "../components/Home-sub-components/TableHome";
import SlotHome from "../components/Home-sub-components/SlotHome";
import FishingHome from "../components/Home-sub-components/FishingHome";
import EgameHome from "../components/Home-sub-components/EgameHome";
import Footer from "../components/Footer";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState('Sports');
  const handleActiveComponent = (data) => {
    setActiveComponent(data);
  }

  const navigate = useNavigate();
  useEffect(() => {
  if(localStorage.getItem("userInfo") !== null) {
  }else {
    navigate('/home/')
  }
},[navigate])

  return (
    <div>
      <Slider/>
      <HomeMarquee/>
      <HomeNav active={handleActiveComponent} />
      <div className="p-2">
        {activeComponent === 'Sports' && <SportsHome />}
        {activeComponent === 'Live' && <LiveHome />}
        {activeComponent === 'Table' && <TableHome />}
        {activeComponent === 'Slot' && <SlotHome />}
        {activeComponent === 'Fishing' && <FishingHome />}
        {activeComponent === 'Egame' && <EgameHome />}
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Home;