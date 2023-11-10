import React, { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const SignUpNav = ({ activeItem, onActiveItemChange }) => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
    onActiveItemChange(item);
  };

  const sidebarItems = {
    Signup: [
      {name: 'Home',icon:faPlay},
      { name: 'Service',icon: faPlay  },
      { name: 'Admin',icon: faPlay },
      { name: 'Super',icon: faPlay  },
      { name: 'Master',icon: faPlay  },
      { name: 'Old/New',icon: faPlay  }

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
          active === item.name ? 'text-black relative z-20' : 'text-black'
        } cursor-pointer flex items-center gap-1 lg:gap-2 ${index !== items.length - 1 ? 'border-r border-gray-500 pr-1 lg:pr-3 transition-transform duration-300 ease-cubic-bezier transform' : 'pr-1 lg:pr-3'}`}
        onClick={() => handleClick(item.name)}
      >
        <FontAwesomeIcon
          icon={item.icon}
          className=" text-xs lg:text-lg "
        />
        <p className="text-xs lg:text-base font-semibold uppercase">{item.name}</p>
      </div>
    ));
  };

  return (
    <div className='flex justify-center items-center px-3 lg:px-7 w-full h-full bg-slate-300'>
      <div className=" flex gap-2 lg:gap-5 items-center">
        {renderSidebarItems(sidebarItems[activeItem])}
      </div>
    </div>
   );
};

export default SignUpNav;
