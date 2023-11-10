import React, { useState} from 'react';

const DarkFilter = ({ activeItem, onActiveItemChange }) => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
    onActiveItemChange(item);
  };

  const sidebarItems = {
    Live: [
      { name: 'Sexy'},
      { name: 'evo' },
      { name: 'pt' },
      { name: 'pp' },
      { name: 'venus' }
    ],
    Table: [
      { name: 'kingmaker'},
      { name: 'jili' }
    ],
    Slot: [
      { name: 'pp'},
      { name: 'kingmaker' },
      { name: 'dragonsooft' },
      { name: 'spade' },
      { name: 'pt' },
      { name: 'jdb' },
      { name: 'fc' },
      { name: 'jili' }
    ],
    Fishing: [
      { name: 'spade'},
      { name: 'jili' }
    ],
    Egame: [
      { name: 'pp'}
    ],
  };

  if(active===null){
    const temp = sidebarItems[activeItem]
    setActive(temp[0].name)
  }

  const renderSidebarItems = (items) => {
    return items.map((item, index) => (
      <div
        key={index}
        className={`${
          active === item.name ? 'text-black relative active-dark z-20' : 'text-white'
        } cursor-pointer`}
        onClick={() => handleClick(item.name)}
      >
        <p className="text-lg font-semibold uppercase">{item.name}</p>
      </div>
    ));
  };

  return (
    <div className='flex justify-between items-center px-7 bg-[#333333] flex-wrap  py-3 '>
      <div className=" flex flex-wrap gap-8 gap-y-3">
        {renderSidebarItems(sidebarItems[activeItem])}
      </div>
    </div>
   );
};

export default DarkFilter;
