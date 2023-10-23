import React from "react";
import type { Story } from "@ladle/react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselControl,
  CarouselIndicator,
  CarouselIndicatorGroup,
  CarouselNextSlideTrigger,
  CarouselPrevSlideTrigger,
  CarouselSlide,
  CarouselSlideGroup,
  CarouselViewport,
  type CarouselProps
} from "~/components/ui/carousel";
import { Button } from "~/components/ui/button";
import Image from "next/image";

export const carousel: Story<CarouselProps> = (props) => {
  const images = [
    "https://tinyurl.com/5b6ka8jd",
    "https://tinyurl.com/7rmccdn5",
    "https://tinyurl.com/59jxz9uu",
    "https://tinyurl.com/6jurv23t",
    "https://tinyurl.com/yp4rfum7"
  ];
  return (
    <Carousel {...props}>
      <CarouselViewport>
        <CarouselSlideGroup>
          {images.map((image, index) => (
            <CarouselSlide key={index} index={index}>
              <Image
                src={image}
                alt={`Slide Image ${index}`}
                style={{ height: "398px", width: "100%", objectFit: "cover" }}
              />
            </CarouselSlide>
          ))}
        </CarouselSlideGroup>
        <CarouselControl>
          <CarouselPrevSlideTrigger asChild>
            <Button size='sm' aria-label='Previous Slide'>
              <ChevronLeftIcon />
            </Button>
          </CarouselPrevSlideTrigger>
          <CarouselIndicatorGroup>
            {images.map((_, index) => (
              <CarouselIndicator
                key={index}
                index={index}
                aria-label={`Goto slide ${index + 1}`}
              />
            ))}
          </CarouselIndicatorGroup>
          <CarouselNextSlideTrigger asChild>
            <Button size='sm' aria-label='Next Slide'>
              <ChevronRightIcon />
            </Button>
          </CarouselNextSlideTrigger>
        </CarouselControl>
      </CarouselViewport>
    </Carousel>
  );
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Carousel"
};
