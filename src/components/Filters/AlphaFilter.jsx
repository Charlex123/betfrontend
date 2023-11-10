import React, { useState } from 'react';

const AlphaFilter = ({ activeItem, onActiveItemChange }) => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
    onActiveItemChange(item);
  };

  const firstLetter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  if (active === null) {
    const temp = firstLetter;
    setActive(temp[0]);
  }

  const renderSidebarItems = (items) => {
    return items.map((item, index) => (
      <div className='flex flex-col items-center' key={index}>
        <div
          className={`${
            active === item ? 'bg-primary text-black' : 'bg-[#7E919E] hover:bg-primary  text-white'
          } relative group z-10 flex flex-col justify-center items-center cursor-pointer w-[26px] h-[26px] transition duration-500 rounded-full `}
          onClick={() => handleClick(item)}
        >
          <p className="text-xs font-semibold">{item}</p>
        </div>
        <div className='w-[6px] h-[6px] bg-[#7E919E] my-2 rounded-full'></div>
      </div>
    ));
  };

  return (
    <aside className="p-1 rounded-md h-full w-full max-w-[26px]">
      {renderSidebarItems(firstLetter)}
    </aside>
  );
};

export default AlphaFilter;
