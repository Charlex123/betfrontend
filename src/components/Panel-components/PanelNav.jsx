import React from "react";
import logout from "../../assets/icons/login.png"
import HeaderDropdown from "./HeaderDropdown";

const PanelNav = (props) => {
  const handleButtonClick = (buttonValue) => {
    props.active(buttonValue);
  };

  return (
    <div className="w-full bg-primary px-4 lg:px-20 h-[30px] flex justify-center">
      <div className="w-full flex items-center justify-between">
        <div className="h-full text-xs lg:text-sm font-semibold flex">
          <div
            onClick={() => handleButtonClick("downline")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === "downline" ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            DownLine List
          </div>
          <div
            onClick={() => handleButtonClick("account")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === "account" ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            My Account
          </div>
          <div
            onClick={() => handleButtonClick("my report")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === <HeaderDropdown/> ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            <HeaderDropdown onHeaderDropdownSelect={props.onHeaderDropdownSelect} />
          </div>
          <div
            onClick={() => handleButtonClick("betlist")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === "betlist" ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            BetList
          </div>
          <div
            onClick={() => handleButtonClick("betlist live")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === "betlist live" ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            BetList Live
          </div>
          <div
            onClick={() => handleButtonClick("risk management")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === "risk management" ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            Risk management
          </div>
          <div
            onClick={() => handleButtonClick("banking")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === "banking" ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            Banking
          </div>
          <div
            onClick={() => handleButtonClick("block market")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === "block market" ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            block market
          </div>
          <div
            onClick={() => handleButtonClick("old res")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === "old res" ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            Old Res
          </div>
          <div
            onClick={() => handleButtonClick("settings")}
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer ${
              props.panelActive === "settings" ? "bg-primary-dark" : "bg-primary"
            }`}
          >
            My Settings
          </div>
        </div>
        <div className="h-full text-xs lg:text-sm font-semibold flex">
          <div
            className={`h-full px-2 flex items-center border-r border-black `}
          >
            Time zone
          </div>
          <div
            className={`h-full px-2 flex items-center border-r border-black cursor-pointer`}
          >
            <span><img src={logout} alt="logout" className=" w-4 mr-1" /></span>
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelNav;
