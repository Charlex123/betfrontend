import React, { useState} from 'react';

const FilterNavItems = ({ activeItem, onActiveItemChange }) => {
  const [active, setActive] = useState(null);

  const handleClick = (item) => {
    setActive(item);
    onActiveItemChange(item);
  };

  const filterItems = {
    Filters: [
      { name: 'In-Play' },
      { name: 'Today' },
      { name: 'Tomorrow' }
    ]
  };

  if(active===null){
    const temp = filterItems[activeItem]
    setActive(temp[0].name)
  }

  const renderFilterNavItems = (items) => {
    return items.map((item, index) => (
      <div
        key={index}
        className={`${
          active === item.name ? 'text-white underline' : 'text-gray-200'
        } cursor-pointer flex gap-2 items-center`}
        onClick={() => handleClick(item.name)}
      >
        <p className="text-lg font-semibold">{item.name}</p>
      </div>
    ));
  };

  return (
    <div className='flex items-center px-6'>
      <div className=" flex items-center gap-8">
        {renderFilterNavItems(filterItems[activeItem])}
      </div>
    </div>
   );
};

export default FilterNavItems;
