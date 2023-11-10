import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const BottomNav = (props) => {
  const iconSize = { fontSize: '24px' };
  const [bottomActiveButton, setBottomActiveButton] = useState(props.bottomActive);

  const handleButtonClick = (buttonValue) => {
    setBottomActiveButton(buttonValue);
  };

  return (
    <>
      <div className=" w-[480px] fixed bottom-0 left-0 right-0 container mx-auto h-[78px] flex items-center justify-around bg-white border z-50">
        <Link
          to="/home"
          className={`flex flex-col-reverse items-center justify-between gap-1 group hover:text-primary ${
            bottomActiveButton === 'Home' ? 'text-primary ' : ' text-[#1b1f23]'
          }`}
          onClick={() => handleButtonClick('Home')}
        >
          <p className="text-sm">Home</p>
          <FontAwesomeIcon icon={faHome} style={iconSize} />
        </Link>
        <Link
          to="/casino"
          className={`flex flex-col-reverse items-center justify-between gap-1 group hover:text-primary ${
            bottomActiveButton === 'Casino' ? 'text-primary ' : ' text-[#1b1f23]'
          }`}
          onClick={() => handleButtonClick('Casino')}
        >
          <p className="text-sm">Casino</p>
          <FontAwesomeIcon icon={faHome} style={iconSize} />
        </Link>
        <Link
          to="/sports"
          className={`flex flex-col-reverse items-center justify-center gap-1 group hover:text-primary ${
            bottomActiveButton === 'Sports' ? 'text-primary ' : ' text-[#1b1f23]'
          }`}
          onClick={() => handleButtonClick('Sports')}
        >
          <p className="text-sm">Sports</p>
          <FontAwesomeIcon icon={faFutbol} style={iconSize} />
        </Link>
        <Link
          to="/leagues"
          className={`flex flex-col-reverse items-center justify-center gap-1 group hover:text-primary ${
            bottomActiveButton === 'Leagues' ? 'text-primary ' : ' text-[#1b1f23]'
          }`}
          onClick={() => handleButtonClick('Leagues')}
        >
          <p className="text-sm">Leagues</p>
          <FontAwesomeIcon icon={faFutbol} style={iconSize} />
        </Link>
        <Link
          className={`flex flex-col-reverse items-center justify-center gap-1 group hover:text-primary ${
            bottomActiveButton === 'MyBets' ? 'text-primary ' : ' text-[#1b1f23]'
          }`}
          onClick={() => handleButtonClick('MyBets')}
        >
          <p className="text-sm">My Bets</p>
          <FontAwesomeIcon icon={faFutbol} style={iconSize} />
        </Link>
      </div>
    </>
  );
}

export default BottomNav;
