import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBabyCarriage, faBox, faCalendar, faCalendarDays, faPlay, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ activeItem, onActiveItemChange }) => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
    onActiveItemChange(item);
  };

  const sidebarItems = {
    SportsHome: [
      { name: 'In-Play', icon: faPlay },
      { name: 'Today', icon: faCalendar },
      { name: 'Tomorrow', icon: faCalendarDays },
      { name: 'Leagues', icon: faTrophy },
      { name: 'Parlay', icon: faBox }
    ],
    LiveHome: [
      { name: 'Catalog', icon: faPlay },
      { name: 'Latest', icon: faPlay },
      { name: 'A-Z', icon: faPlay }
    ],
    TableHome: [
      { name: 'Latest', icon: faPlay },
      { name: 'A-Z', icon: faPlay }
    ],
    SlotHome: [
      { name: 'Latest', icon: faPlay },
      { name: 'A-Z', icon: faPlay }
    ],
    FishingHome: [
      { name: 'Latest', icon: faPlay },
      { name: 'A-Z', icon: faBabyCarriage }
    ],
    EgameHome: [
      { name: 'Latest', icon: faPlay },
      { name: 'A-Z', icon: faPlay }
    ]
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
          active === item.name ? 'bg-primary text-black' : 'text-gray-700 hover:text-gray-400'
        } relative group z-10 flex flex-col justify-center items-center cursor-pointer w-full h-20 transition duration-500 rounded-lg `}
        onClick={() => handleClick(item.name)}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className="relative flex items-center justify-center text-3xl icon-inplay-b"
        />
        <p className="pt-2 text-xs">{item.name}</p>
      </div>
    ));
  };

  return (
    <aside className="bg-white p-1 rounded-md space-y-4 h-full min-w-[70px]">
      {renderSidebarItems(sidebarItems[activeItem])}
    </aside>
  );
};

export default Sidebar;
