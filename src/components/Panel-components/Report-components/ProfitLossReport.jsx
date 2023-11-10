import React from "react";
import PanelFilter from "./PanelFilter";
import PanelTable from "../PanelTable";

const ProfitLossReport = ({ selectedHeaderItem }) => {
  return (
    <div className=" text-[#1e1e1e] py-3">
      <h2 className=" text-lg font-semibold">{selectedHeaderItem}</h2>
      <div className=" mt-2 flex flex-col gap-1">
        <div className="flex gap-1 items-center">
          <p className=" text-xs lg:text-sm">Data Source :</p>
          <select className="border border-gray-300 rounded px-1 ">
            <option value="db">DB</option>
            <option value="elk">ELK</option>
          </select>
        </div>
        <PanelFilter/>
        <div className=" mt-3">
        <PanelTable/>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossReport;