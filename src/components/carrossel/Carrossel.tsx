import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carrossel.css'


interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,

  };

  return (
    <div className="slider-container w-auto">
   
      <button className="button" onClick={() => setWidth(width + 100)}>
      </button>
      <div className=' justify-items-stretch'>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} className="carousel-image " />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;