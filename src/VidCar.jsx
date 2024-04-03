import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic1 from "./Video1.png"
import pic2 from "./Video2.png"
import pic3 from "./Video3.png"
import "./VidCar.css"

function PhotoCarousel1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="photo-carousel1">
      <Slider {...settings} className = "custom">
        <div>
          <img src= {pic1} alt="Photo 1" className = "Pic1"/>
        </div>
        <div>
          <img src = {pic2} alt="Photo 2" className = "Pic2"/>
        </div>
        <div>
          <img src= {pic3}alt="Photo 3" className = "Pic3"/>
        </div>
      </Slider>
    </div>
  );
}

export default PhotoCarousel1;