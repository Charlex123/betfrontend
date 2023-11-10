import React from "react";

const MyAccountProfile=()=> {
  return(
    <div className=" w-full flex gap-3">
      <div className=" w-1/2 bg-white h-fit">
        <header className=" bg-gray-500 text-white px-2 py-1 text-base font-semibold">About You</header>
        <div className=" p-2 flex flex-col gap-2 text-xs lg:text-sm text-[#1e1e1e]">
          <div className=" flex gap-20"><h2 className=" w-1/5">First Name</h2><p>ABCD</p></div>
          <div className=" flex gap-20"><h2 className=" w-1/5">First Name</h2><p>ABCD</p></div>

          <div className=" flex gap-20"><h2 className=" w-1/5">First Name</h2><p>ABCD</p></div>

          <div className=" flex gap-20"><h2 className=" w-1/5">First Name</h2><p>ABCD</p></div>

        </div>
      </div>
      <div className=" w-1/2 bg-white h-fit">
        <header className=" bg-gray-500 text-white px-2 py-1 text-base font-semibold">Contact Details</header>
        <div className=" p-2 flex flex-col gap-2 text-xs lg:text-sm text-[#1e1e1e]">
          <div className=" flex gap-20"><h2 className=" w-1/5">Phone Number</h2><p>ABCD</p></div>
        </div>
      </div>
    </div>
  )
}

export default MyAccountProfile