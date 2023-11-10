import React, { useState} from "react";
import Footer from "../components/Footer";
import BottomNav from "../components/Navigations/BottomNav";
import SportsNav from "../components/Navigations/SportsNav";
import CricketMain from "../components/League-sub-components/CricketMain";
import SoccerMain from "../components/League-sub-components/SoccerMain";
import TennisMain from "../components/League-sub-components/TennisMain";


const Leagues = () => {
  const [activeComponent, setActiveComponent] = useState('Cricket');
  const handleActiveComponent = (data) => {
    setActiveComponent(data);
  }

  return (
    <div className=" pb-[78px]">
      <SportsNav activeItem="Leagues" onActiveItemChange={handleActiveComponent} />
      <div className="p-2">
        {activeComponent === 'Cricket' && <CricketMain/>}
        {activeComponent === 'Soccer' && <SoccerMain/>}
        {activeComponent === 'Tennis' && <TennisMain/>} 
      </div>
      <Footer/>
      <BottomNav bottomActive='Leagues' />
    </div>
  )
}

export default Leagues;