import React, { useEffect, useRef } from "react";
import "./boatsider.css";
import image1 from "../../assets/SALMONFLY.png";
import image2 from "../../assets/STEELHEAD.png";
import image3 from "../../assets/PMD.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const BoatSlider = () => {
  const containerRef = useRef(null);
  const boats = [
    {
      name: "SALMONFLY",
      image: image1,
      link: "sea-cat",
    },
    {
      name: "STEELHEAD",
      image: image2,
      link: "sea-cat",
    },
    {
      name: "PMD",
      image: image3,
      link: "sea-cat",
    },
  ];

  // Duplicate boat items for infinite scroll effect
  const boatList = [
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
    ...boats,
  ]; // Clone list

  const prev = () => {
    containerRef.current.scrollLeft -= 365;
  };
  const next = () => {
    containerRef.current.scrollLeft += 365;
  };

  return (
    <div id="boat-sec">
      {/* card-container */}
      <div id="card-container">
        {/* card-wrapper */}
        <div ref={containerRef} id="card-wrapper">
          {boatList.map((boat, idx) => {
            return (
              <div key={idx} id="card">
                <h2>{boat.name}</h2>
                <div>
                  <img src={boat.image} alt="boat-image" />
                </div>
                {/* button */}
                <a target="_blank" href={boat.link} id="scroll-this-boat">
                  <button>
                    Build this boat{" "}
                    {/* <MdOutlineKeyboardArrowRight id="card-icon" /> */}
                  </button>
                </a>
              </div>
            );
          })}
        </div>

        <div id="boat-btns">
          <button onClick={prev}>
            {/* <MdOutlineKeyboardArrowLeft id="slide-icon" /> */}
          </button>
          <button id="white-btn" onClick={next}>
            {/* <MdOutlineKeyboardArrowRight id="slide-icon" /> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoatSlider;
