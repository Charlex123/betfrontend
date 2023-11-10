import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Switcher from "../Switcher/Switcher";
import FilterNavItems from "./FilterNavItems";

const FilterNav = ({
  switcherLabel
}) => {
  const [activeComponent, setActiveComponent] = useState('Filters');
  const handleActiveComponent = (data) => {
    setActiveComponent(data);
  }
  return (
    <div className="flex items-center bg-black">
      <div className="w-27 bg-slate-900 px-4 py-3 items-center">
        <Switcher label={switcherLabel} />
      </div>

      <FilterNavItems activeItem="Filters" onActiveItemChange={handleActiveComponent} />

      <div className="search-area flex gap-2">
        <FontAwesomeIcon icon={faStar} className="text-white cursor-pointer" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-white cursor-pointer" />
      </div>
    </div>
  )
}
export default FilterNav;