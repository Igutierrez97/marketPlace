"use client";

import { Button } from "@nextui-org/react";
import Carousel from "nuka-carousel";
import Previous from "@/components/iconos/Previous";
import Next from "@/components/iconos/Next";

interface CustomControlProps {
  previousSlide: () => void;
  nextSlide: () => void;
}

export default function Carrusel() {
  const renderCustomLeftControl = ({ previousSlide }: CustomControlProps) => (
    <Button isIconOnly variant="light" onClick={previousSlide} className="carousel-control ml-8">
      <Previous />
    </Button>
  );

  const renderCustomRightControl = ({ nextSlide }: CustomControlProps) => (
    <Button isIconOnly variant="light" onClick={nextSlide} className="carousel-control mr-8 bg-transparent">
      <Next />
    </Button>
  );

  return (
    <Carousel
      autoplay
      swiping
      wrapAround
      renderCenterRightControls={renderCustomRightControl}
      renderCenterLeftControls={renderCustomLeftControl}
      className="w-full mt-1.5 mb-3"
    >
      <img
        alt="promocion"
        src="/carrusell2.jpg"
        className="w-full h-full object-cover rounded-xl"
      />
      <img
        alt="promocion"
        src="/carrusell4.jpg"
        className="w-full h-full object-cover rounded-xl"
      />
      <img
        alt="promocion"
        src="/carrusell6.jpg"
        className="w-full h-full object-cover rounded-xl"
      />
    </Carousel>
  );
}
