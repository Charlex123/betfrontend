import React from "react";
import TopFilter from "../Filters/TopFilter";
import game from "../../assets/images/game.png"
import DarkFilter from "../Filters/DarkFilter";


const SlotCasino = ()=>{
  const handleActiveItemChange = (activeItem) => {
    console.log('Active Item:', activeItem);
  };

  return(
    <div>
      <DarkFilter activeItem="Slot" onActiveItemChange={handleActiveItemChange}/>
      <div className=" p-2">
      <TopFilter activeItem="Slot" onActiveItemChange={handleActiveItemChange} />
        <div className=" flex flex-col gap-3 items-center mt-3 ">
          <div className=" relative bg-white pl-2 pr-2 pt-10 pb-2 flex flex-wrap gap-2 items-center justify-center rounded-tl rounded-tr-2xl rounded-bl-2xl w-full ">
            <header className="label absolute -left-2 top-0 bg-primary h-8 rounded-r-full flex items-center w-40"><div className="pl-4 font-bold text-base ">Game Shows</div><span className="icon-triangle-shadow absolute left-0 top-full"></span></header>
            <div>
              <img className=" w-[134px] h-36 object-cover rounded-tl rounded-tr-2xl rounded-bl-2xl" src={game} alt="game" />
            </div>
            <div>
              <img className="w-[134px] h-36 object-cover rounded-tl rounded-tr-2xl rounded-bl-2xl" src={game} alt="game" />
            </div>
            <div>
              <img className="w-[134px] h-36 object-cover rounded-tl rounded-tr-2xl rounded-bl-2xl" src={game} alt="game" />
            </div>
          </div>
          <div className=" relative bg-white pl-2 pr-2 pt-10 pb-2 flex flex-wrap gap-2 items-center justify-center rounded-tl rounded-tr-2xl rounded-bl-2xl w-full ">
            <header className="label absolute -left-2 top-0 bg-primary h-8 rounded-r-full flex items-center w-40"><div className="pl-4 font-bold text-base ">Baccarat</div><span className="icon-triangle-shadow absolute left-0 top-full"></span></header>
            <div>
              <img className=" w-[134px] h-36 object-cover rounded-tl rounded-tr-2xl rounded-bl-2xl" src={game} alt="game" />
            </div>
            <div>
              <img className="w-[134px] h-36 object-cover rounded-tl rounded-tr-2xl rounded-bl-2xl" src={game} alt="game" />
            </div>
            <div>
              <img className="w-[134px] h-36 object-cover rounded-tl rounded-tr-2xl rounded-bl-2xl" src={game} alt="game" />
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default SlotCasino