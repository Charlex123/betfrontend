import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const MyAccountNav = ({ activeItem, onActiveItemChange }) => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
    onActiveItemChange(item);
  };

  const sidebarItems = {
    MyAccount: [
      { name: 'Account Statement' },
      { name: 'Account Summary' },
      { name: 'Profile' },
      { name: 'Activity Log' },
    ],
  };

  if (active === null) {
    const temp = sidebarItems[activeItem];
    setActive(temp[0].name);
  }

  const renderSidebarItems = (items) => {
    const mappedItems = [];
    for (let i = 0; i < items.length; i += 2) {
      const heading = i === 0 ? 'Position' : 'Account Details';
      mappedItems.push(
        <div key={heading}>
          <p className="text-xs lg:text-sm font-semi px-3 py-2 bold bg-black text-white">{heading}</p>
          <div className="flex flex-col">
            {items[i] && (
              <div
                className={`${
                  active === items[i].name ? 'text-white relative bg-primary z-20' : 'text-gray-800'
                } cursor-pointer flex gap-2 items-center text-xs lg:text-sm px-3 py-2 `}
                onClick={() => handleClick(items[i].name)}
              >
                
                <p className="text-xs lg:text-sm font-semibold">{items[i].name}</p>
              </div>
            )}
            {items[i + 1] && (
              <div
                className={`${
                  active === items[i + 1].name ? 'text-white relative bg-primary z-20' : ' text-gray-800'
                } cursor-pointer flex gap-2 items-center text-xs lg:text-sm px-3 py-2`}
                onClick={() => handleClick(items[i + 1].name)}
              >
               
                <p className="text-xs lg:text-sm font-semibold">{items[i + 1].name}</p>
              </div>
            )}
          </div>
        </div>
      );
    }
    return mappedItems;
  };

  return (
    <div className="flex justify-between items-center bg-white flex-wrap min-w-[250px]">
      <div className="flex flex-col text-xs lg:text-sm w-full">
        {renderSidebarItems(sidebarItems[activeItem])}
      </div>
    </div>
  );
};

export default MyAccountNav;
