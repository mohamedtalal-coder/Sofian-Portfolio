import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import png1 from "../assets/Review.jpg";
import png2 from "../assets/Review.jpg";
import png3 from "../assets/Review.jpg";
import png4 from "../assets/Review.jpg";
import png5 from "../assets/Review.jpg";
import "./Reviews.css";
const items = [
  {
    src: png1,
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: png2,
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
  {
    src: png3,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: png4,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
  {
    src: png5,
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
  },
];

function Reviews(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="w-75" />
      </CarouselItem>
    );
  });

  return (
    <section id="reviews">
      <h1 className="d-flex justify-content-center mb-5">Reviews</h1>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </section>
  );
}

export default Reviews;
