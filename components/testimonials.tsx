import React, { FC } from "react";
import Carousel from "./carousel";
import CarouselItem from "./carousel-item";
import Review from "./review";

const Testimontials: FC = () => (
  <Carousel className="bg-black text-white py-10 lg:py-20">
    <CarouselItem index={0}>
      <Review by="Axel (ShowTime)">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quo
        debitis magnam vitae cupiditate mollitia dignissimos reiciendis amet,
        explicabo porro corporis quis reprehenderit non consequuntur. Doloremque
        eum quidem optio voluptas.
      </Review>
    </CarouselItem>
    <CarouselItem index={1}>
      <Review by="Axel (ShowTime)">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quo
        debitis magnam vitae cupiditate mollitia dignissimos reiciendis amet,
        explicabo porro corporis quis reprehenderit non consequuntur. Doloremque
        eum quidem optio voluptas.
      </Review>
    </CarouselItem>
    <CarouselItem index={2}>
      <Review by="Axel (ShowTime)">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quo
        debitis magnam vitae cupiditate mollitia dignissimos reiciendis amet,
        explicabo porro corporis quis reprehenderit non consequuntur. Doloremque
        eum quidem optio voluptas.
      </Review>
    </CarouselItem>
    <CarouselItem index={3}>
      <Review by="Axel (ShowTime)">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quo
        debitis magnam vitae cupiditate mollitia dignissimos reiciendis amet,
        explicabo porro corporis quis reprehenderit non consequuntur. Doloremque
        eum quidem optio voluptas.
      </Review>
    </CarouselItem>
    <CarouselItem index={4}>
      <Review by="Axel (ShowTime)">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quo
        debitis magnam vitae cupiditate mollitia dignissimos reiciendis amet,
        explicabo porro corporis quis reprehenderit non consequuntur. Doloremque
        eum quidem optio voluptas.
      </Review>
    </CarouselItem>
    <CarouselItem index={5}>
      <Review by="Axel (ShowTime)">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quo
        debitis magnam vitae cupiditate mollitia dignissimos reiciendis amet,
        explicabo porro corporis quis reprehenderit non consequuntur. Doloremque
        eum quidem optio voluptas.
      </Review>
    </CarouselItem>
    <CarouselItem index={6}>
      <Review by="Axel (ShowTime)">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum quo
        debitis magnam vitae cupiditate mollitia dignissimos reiciendis amet,
        explicabo porro corporis quis reprehenderit non consequuntur. Doloremque
        eum quidem optio voluptas.
      </Review>
    </CarouselItem>
  </Carousel>
);

export default Testimontials;
