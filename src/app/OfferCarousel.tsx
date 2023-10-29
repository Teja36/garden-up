"use client";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const OfferCarousel = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        stopOnHover={true}
      >
        <div key="slide1" className="relative w-full  h-64">
          <Image
            src="/pexels-designecologist-1005058.jpg"
            alt="Offer 1"
            fill={true}
            className="object-cover"
          />
        </div>
        <div key="slide1" className="relative w-full  h-64">
          <Image
            src="/pexels-designecologist-1005058.jpg"
            alt="Offer 1"
            fill={true}
            className="object-cover"
          />
        </div>
        {/* <div key="slide2" className="relative w-screen h-32">
          <Image
            src="/pexels-scott-webb-1903965.jpg"
            alt="Offer 2"
            fill={true}
            className="object-cover"
          />
        </div>
        <div key="slide3" className="relative w-screen h-32">
          <Image
            src="/pexels-sharon-hoo-6349701.jpg"
            alt="Offer 3"
            fill={true}
            className="object-cover"
          />
        </div> */}
      </Carousel>
    </div>
  );
};

export default OfferCarousel;
