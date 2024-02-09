import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import image1 from "../../images/Bihar-Kushal-Yuva-Program.webp";
import image2 from "../../images/bimar-aaksmik-fasal-yojna0.webp";
import image3 from "../../images/village.png";
import image4 from "../../images/1.jpg";
import image5 from "../../images/2.jpg";
import image6 from "../../images/3.jpg";
import image7 from "../../images/4.jpg";
import image8 from "../../images/5.jpg";
import image9 from "../../images/6.jpg";


import "./Carousel.css";

const data = [
  {
    src: image1,
    alt: "Image 1 for carousel",
  },
  {
    src: image2,
    alt: "Image 2 for carousel",
  },
  {
    src: image3,
    alt: "Image 3 for carousel",
  },
  {
    src: image4,
    alt: "Image 4 for carousel",
  },
  {
    src: image5,
    alt: "Image 5 for carousel",
  },
  {
    src: image6,
    alt: "Image 6 for carousel",
  },
  {
    src: image7,
    alt: "Image 7 for carousel",
  },  
  {
    src: image8,
    alt: "Image 8 for carousel",
  },
  {
    src: image9,
    alt: "Image 9 for carousel",
  },
];

export const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000); // Change 3000 to the desired interval in milliseconds

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="carousel" style={{marginTop : "17px"}}>
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
