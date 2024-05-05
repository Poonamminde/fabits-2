import React from "react";
import Image from "../../../assets/carousel-images/note_stack_add.svg";
import { Navigation, Pagination } from "swiper/modules";
import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import RightArrow from "../../../assets/carousel-images/rightarrow.svg";
import LeftArrow from "../../../assets/carousel-images/leftarrow.svg";
import Card from "./card.js";
import Retirement from "../../../assets/carousel-images/retirement.png";
import Emergency from "../../../assets/carousel-images/emergency.svg";
import Wedding from "../../../assets/carousel-images/wedding.svg";
import Vacation from "../../../assets/carousel-images/vacation.svg";
import "./index.css";

/**
 * Swiper js components used for create carousel
 * Implement a carousel functionality within the horizontal section to display plan icons.
 * Clicking the left and right buttons should reveal 2 icons in the respective direction while hiding 2 icons from the opposite direction. (Acceptance Criteria: Clicking the buttons should smoothly transition the carousel, revealing and hiding icons as specified)
 * The carousel contains 14 plan icons.
 * keyboard navigation for carousel movement (left/right arrows).
 * Clicking on any plan icon should redirect the user to "MY LINKEDIN PAGE" on new tab.
 * @returns {JSX Element}
 */
const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(true);
  const [swiper, setSwiper] = useState(null);
  React.useEffect(() => {
    setDisplay1(true);
    setDisplay2(true);
    if (currentIndex <= 0) {
      setDisplay1(false);
      setDisplay2(true);
    } else if (currentIndex >= 14 - 6) {
      setDisplay2(false);
      setDisplay1(true);
    }
  }, [currentIndex, display1, display2]);
  React.useEffect(() => {
    const handleNext = () => {
      try {
        swiper.slideNext();
      } catch {
        console.log("error");
      }
    };

    const handlePrevious = () => {
      try {
        swiper.slidePrev();
      } catch {
        console.log("error");
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [swiper]);
  const data = [
    {
      image: Retirement,
      title: "Retirement",
      description: "Your old age, taken care of",
    },
    {
      image: Emergency,
      title: "Emergency",
      description: "Be prepared at all times",
    },
    {
      image: Wedding,
      title: "Wedding",
      description: "Plan your dream wedding today",
    },
    {
      image: Vacation,
      title: "Vacation",
      description: "Never too late for the Bahamas!",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
    {
      image: Retirement,
      title: "Education",
      description: "Build your career, tension-free",
    },
  ];

  const handleSlideChange = (swiper) => {
    if (currentIndex < swiper.activeIndex) {
      swiper.activeIndex += 1;
      setCurrentIndex(swiper.activeIndex);
    } else {
      swiper.activeIndex -= 1;
      setCurrentIndex(swiper.activeIndex);
    }
  };
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        virtual
        spaceBetween={10}
        slidesPerView={6}
        navigation={{
          nextEl: `.arrow-right`,
          prevEl: `.arrow-left`,
        }}
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        className="carousel"
      >
        <SwiperSlide key={0}>
          <div className="carousel-details-card">
            <h2>What financial goal do you want to plan today?</h2>
            <p>Select a goal to start planning</p>
            <img src={Image} alt="img" />
          </div>
        </SwiperSlide>
        {data.map((item, index) => (
          <SwiperSlide key={index + 1}>
            <Card data={item} />
          </SwiperSlide>
        ))}

        <div
          className={`arrow-left arrow arrow-left ${
            display1 === false && "hide-icon"
          }`}
        >
          <img src={LeftArrow} alt="prev" />
        </div>

        <div
          className={`arrow-right arrow arrow-right ${
            display2 === false && "hide-icon"
          }`}
        >
          <img src={RightArrow} alt="right" />
        </div>
      </Swiper>
    </div>
  );
};

export default Index;
