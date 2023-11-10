import React, { useState} from "react";
import Footer from "../components/Footer";
import BottomNav from "../components/Navigations/BottomNav";
import CasinoNav from "../components/Navigations/CasinoNav";
import PopularCasino from "../components/Casino-sub-components/PopularCasino";
import LiveCasino from "../components/Casino-sub-components/LiveCasino";
import TableCasino from "../components/Casino-sub-components/TableCasino";
import SlotCasino from "../components/Casino-sub-components/SlotCasino";
import FishingCasino from "../components/Casino-sub-components/FishingCasino";
import EgameCasino from "../components/Casino-sub-components/EgameCasino";

const Casino = () => {
  const [activeComponent, setActiveComponent] = useState('Popular');
  const handleActiveComponent = (data) => {
    setActiveComponent(data);
  }

  return (
    <div className=" pb-[78px]">
      <CasinoNav active={handleActiveComponent} />
      <div className="">
        {activeComponent === 'Popular' && <PopularCasino />}
        {activeComponent === 'Live' && <LiveCasino />}
        {activeComponent === 'Table' && <TableCasino />}
        {activeComponent === 'Slot' && <SlotCasino />}
        {activeComponent === 'Fishing' && <FishingCasino />}
        {activeComponent === 'Egame' && <EgameCasino />}
      </div>
      <Footer/>
      <BottomNav bottomActive='Casino'/>
    </div>
  )
}

export default Casino;