import lottie from "lottie-web";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AnimatedIconMemo } from "./components/Animated-Icon";
import menuIcon from "./images/close-center-menu.json";
import financialIcon from "./images/financial-consulting.json";
import insuranceIcon from "./images/insurance.json";
import investmentIcon from "./images/investment.json";
import marketingIcon from "./images/marketing.json";

export const BtnNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isHidden, setHidden] = useState(false);
  const [isClicked, setClicked] = useState(false);

  const ref = useRef(null);
  const [animation, setAnimation] = useState();

  useEffect(() => {
    if (ref.current) {
      const animationItem = lottie.loadAnimation({
        animationData: menuIcon,
        loop: false,
        autoplay: false,
        container: ref.current,
      });

      setAnimation(animationItem);
    }
  }, []);

  const onBlur = () => {
    if (!isClicked) {
      setHidden(false);
      return setClicked(true);
    }

    setHidden(true);
    setClicked(false);

    const tempInput = document.createElement("input");

    document.body.appendChild(tempInput);
    tempInput.focus();
    document.body.removeChild(tempInput);
  };

  const playOnClick = () => {
    if (!isClicked) {
      console.log("Not Clicked");
      return animation.playSegments([0, 32], false);
    }

    console.log("Clicked");
    return animation.playSegments([32, 64], false);
  };

  return (
    <div
      className="btn-nav"
      onClick={onBlur}
      onMouseLeave={() => setHidden(false)}
    >
      <button className="nav-trigger">
        {/* Play Animation For Hover Too */}
        <LottieIcon onClick={playOnClick} ref={ref}></LottieIcon>
      </button>

      {/* FIXME change this into styled componen to fix the flashing (no animation when clicking) */}
      {!isHidden && (
        <div className="btn-nav-items">
          {location.pathname !== "/financial" && (
            <div
              className="btn-nav-item"
              onClick={() => navigate("/financial")}
            >
              <AnimatedIconMemo
                loop={true}
                autoplay={true}
                iconWidth={"19rem"}
                iconHeight={"80%"}
                animationData={financialIcon}
              ></AnimatedIconMemo>
              Financial
            </div>
          )}

          {location.pathname !== "/marketing" && (
            <div
              className="btn-nav-item"
              onClick={() => navigate("/marketing")}
            >
              <AnimatedIconMemo
                loop={true}
                autoplay={true}
                iconWidth={"19rem"}
                iconHeight={"80%"}
                animationData={marketingIcon}
              ></AnimatedIconMemo>
              Marketing
            </div>
          )}

          {location.pathname !== "/insurance" && (
            <div
              className="btn-nav-item"
              onClick={() => navigate("/insurance")}
            >
              <AnimatedIconMemo
                loop={true}
                autoplay={true}
                iconWidth={"19rem"}
                iconHeight={"80%"}
                animationData={insuranceIcon}
              ></AnimatedIconMemo>
              Insurance
            </div>
          )}

          {location.pathname !== "/investment" && (
            <div
              className="btn-nav-item"
              onClick={() => navigate("/investment")}
            >
              <AnimatedIconMemo
                loop={true}
                autoplay={true}
                iconWidth={"19rem"}
                iconHeight={"80%"}
                animationData={investmentIcon}
              ></AnimatedIconMemo>
              Investment
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const LottieIcon = styled.div`
  width: ${({ iconWidth }) => (iconWidth ? `${iconWidth}` : "3.3rem")};
  height: ${({ iconHeight }) => (iconHeight ? `${iconHeight}` : "2.2rem")};

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
