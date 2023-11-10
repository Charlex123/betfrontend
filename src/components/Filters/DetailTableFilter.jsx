import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const DetailTableFilter = ({ activeItem, onActiveItemChange }) => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
    onActiveItemChange(item);
  };

  const sidebarItems = {
    Fancybet: [
      { name: 'All' },
      { name: 'Overs' },
      { name: 'Batsman' }
    ],
    Sportsbook: [
      { name: 'All' },
      { name: 'Popular' },
      { name: 'Match' },
      { name: 'Over' },
      { name: 'Innings' },
      { name: 'Players' }
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
          active === item.name ? 'text-white border-b-2 border-white relative z-20' : 'text-white'
        } cursor-pointer flex gap-2 items-center `}
        onClick={() => handleClick(item.name)}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className="relative flex items-center justify-center text-xl "
        />
        <p className="text-lg font-semibold px-2">{item.name}</p>
      </div>
    ));
  };

  return (
    <div className='flex justify-between items-center px-5 bg-primary flex-wrap  py-1 '>
      <div className=" flex flex-wrap gap-6 gap-y-3">
        {renderSidebarItems(sidebarItems[activeItem])}
      </div>
    </div>
   );
};

export default DetailTableFilter;
