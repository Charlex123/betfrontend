import React, { useState } from "react";
import PanelMarquee from "./PanelMarquee";
import AddUserPopup from "./AddUserPopup";
import PanelTable from "./PanelTable";
import PanelInfoBar from "./PanelInfoBar";

const PanelHome= ()=> {

  return(
    <div className=" w-full flex flex-col space-y-4">
      <PanelMarquee/>
      <div className=" flex justify-between">
        <div className=" flex gap-4">
          <div>
            <div className=" relative flex w-full bg-white ">
            <input
              type="search"
              className="bg-white relative m-0 -mr-0.5 block w-[280px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black placeholder-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder-text-neutral-200 dark:focus:border-primary"
              placeholder="Find Member..."
              aria-label="Search"
              aria-describedby="button-addon3"
            />

            <button
              className="absolute right-1 top-1 z-[2] rounded border-2 bg-primary border-primary px-4 py-1 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-primary-dark hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              data-te-ripple-init
            >
              Search
            </button>
            </div>
          </div>
          <div className="flex gap-1 items-center">
            <p>Status</p>
            <select className="border border-gray-300 rounded px-2 py-1">
              <option value="active">Active</option>
              <option value="suspended">Suspended</option>
              <option value="locked">Locked</option>
              <option value="all">All</option>
            </select>
          </div>
        </div>
        <div>
          <AddUserPopup/>
        </div>
      </div>
      <PanelInfoBar/>
      <div>
        <PanelTable />
      </div>
    </div>
  )
}

export default PanelHome