import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const SportsNav = ({ activeItem, onActiveItemChange }) => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
    onActiveItemChange(item);
  };

  const sidebarItems = {
    Sports: [
      { name: 'All', icon: faPlay },
      { name: 'Cricket', icon: faPlay },
      { name: 'Soccer', icon: faPlay },
      { name: 'Tennis', icon: faPlay }
    ],
    Leagues: [
      { name: 'Cricket', icon: faPlay },
      { name: 'Soccer', icon: faPlay },
      { name: 'Tennis', icon: faPlay }
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
          active === item.name ? 'text-black relative active-sports-filter z-20' : 'text-white'
        } cursor-pointer flex gap-2 items-center `}
        onClick={() => handleClick(item.name)}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className="relative flex items-center justify-center text-xl "
        />
        <p className="text-lg font-semibold">{item.name}</p>
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

export default SportsNav;
