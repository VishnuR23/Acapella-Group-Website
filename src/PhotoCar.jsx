import React from 'react';
import Slider from 'react-slick';
import Flyer1 from "./Flyer1.png";
import Flyer2 from "./Flyer2.jpeg";
import Flyer3 from "./Flyer3.jpeg";
import Flyer4 from "./Flyer4.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PhotoCar.css"

function PhotoCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '1px'
  };

  return (
    <div className="photo-carousel">
      <Slider {...settings} className = "custom-slider">
        <div>
          <img src= {Flyer1} alt="Image 1" />
        </div>
        <div>
          <img src= {Flyer2} alt="Image 2" />
        </div>
        <div>
          <img src= {Flyer3} alt="Image 3" />
        </div>
        <div>
          <img src= {Flyer4} alt="Image 4" />
        </div>
      </Slider>
    </div>
  );
}

export default PhotoCarousel;