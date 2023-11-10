import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TopFilter = ({ activeItem, onActiveItemChange }) => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
    onActiveItemChange(item);
  };

  const sidebarItems = {
    Popular: [
      { name: 'Catalog' },
      { name: 'Latest'},
      { name: 'A-Z' }
    ],
    Live: [
      { name: 'Catalog' },
      { name: 'Latest'},
      { name: 'A-Z' }
    ],
    Table: [
      { name: 'Latest'},
      { name: 'A-Z' }
    ],
    Slot: [
      { name: 'Latest'},
      { name: 'A-Z' }
    ],
    Fishing: [
      { name: 'Latest'},
      { name: 'A-Z' }
    ],
    Egame: [
      { name: 'Latest'},
      { name: 'A-Z' }
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
          active === item.name ? 'text-black relative active z-20' : 'text-black'
        } cursor-pointer ${index !== items.length - 1 ? 'border-r border-gray-500 pr-4 transition-transform duration-300 ease-cubic-bezier transform' : 'pr-4'}`}
        onClick={() => handleClick(item.name)}
      >
        <p className="text-lg font-semibold">{item.name}</p>
      </div>
    ));
  };

  return (
    <div className='flex justify-between items-center px-7'>
      <div className=" flex gap-5">
        {renderSidebarItems(sidebarItems[activeItem])}
      </div>
      <div className=' text-2xl'>
        <FontAwesomeIcon icon={faSearch} className=' cursor-pointer' />
      </div>
    </div>
   );
};

export default TopFilter;
