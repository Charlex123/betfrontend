import React, { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';

const ScrollToTop = (props) => {
  const scrollableDiv = props.scrollableDiv
  const scrollableDivTop = props.scrollableDivTop
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
        if (scrollableDivTop > 100) {
            setShowTopBtn(true);
        } else {
            setShowTopBtn(false);
        }
}, [scrollableDivTop]);

  const goToTop = () => {
    console.log("working")
    scrollableDiv.scrollTo({
      top: 0,
      behavior: 'smooth' // You can change this to 'auto' for instant scrolling
    });
  };


  return (
    <div className="top-to-btm w-[480px] mx-auto">
        {" "}
        {showTopBtn && (
            <FaAngleUp
                className="icon-position icon-style"
                onClick={goToTop}
            />
        )}{" "}
    </div>
  );
};
export default ScrollToTop;