import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import e1 from "../../images/escritorio/1.webp";
import e2 from "../../images/escritorio/2.webp";
import e3 from "../../images/escritorio/3.webp";
import e4 from "../../images/escritorio/4.webp";
import e5 from "../../images/escritorio/5.webp";
import e6 from "../../images/escritorio/6.webp";

let carouselImages = [e1, e2, e3, e4, e5, e6];

let renderCarouselImages = carouselImages.map((item) => {
  return (
    <img
      key={item + Math.random()}
      src={item}
      alt={`carousel ${item}`}
      className="rounded max-w-[100vw] md:max-w-xl"
      width="100%"
      height="100%"
    />
  );
});

export default function Structure() {
  return (
    <div className="flex flex-col justify-between gap-2 p-4 md:p-0 md:pb-5 md:flex-row">
      <p className="text-start text-lg font-['Raleway'] text-[#4c4c4c] font-bold leading-8 max-w-3xl px-5">
        Localizado na cidade de três lagoas-MS, contamos com um prédio comercial
        no centro da cidade. Av Capitão Olinto Mancini, 878. Entre em contato
        conosco e marque uma visita.
      </p>
      <Carousel
        autoPlay={true}
        interval={4000}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        className="md:-mt-20"
      >
        {renderCarouselImages}
      </Carousel>
    </div>
  );
}
