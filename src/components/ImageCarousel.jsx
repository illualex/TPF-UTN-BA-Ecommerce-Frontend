import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/ImageCarousel.css";

import bannerLogitech from "../assets/images/image-carousel/img-logitech-banner.jpg";
import bannerBuildPc from "../assets/images/image-carousel/img-buildpc-banner.jpg";
import bannerNvidia from "../assets/images/image-carousel/img-nvidia-banner.jpg";
import bannerAmd from "../assets/images/image-carousel/img-amd-banner.jpg";
import bannerGigabyte from "../assets/images/image-carousel/img-gigabyte-banner.jpg";

const banners = [
  {
    src: bannerLogitech,
    alt: "Persona usando un volante para computadora",
  },
  {
    src: bannerGigabyte,
    alt: "Grupo de personas con Aorus",
  },
  {
    src: bannerNvidia,
    alt: "Placa de video de la marca Nvidia",
  },
  {
    src: bannerAmd,
    alt: "Placa de video y un procesador de la marca AMD",
  },
  {
    src: bannerBuildPc,
    alt: "Banner de Arma tu pc",
  },
];

const ImageCarousel = () => {
  return (
    <Swiper
      className="custom-swiper"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 3000 }}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <img src={banner.src} alt={banner.alt} className="img-banner" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
