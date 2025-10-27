import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { useLanguage } from "./LanguageContext"; // <-- 1. Import the hook
import "./Reviews.css";

// --- 2. Define your images ---
// (Replace these paths with your actual 10 image files)

// 5 English Images
import en_img1 from "../assets/En/1.png";
import en_img2 from "../assets/En/2.png";
import en_img3 from "../assets/En/3.png";
import en_img4 from "../assets/En/4.png";
import en_img5 from "../assets/En/5.png";

// 5 Arabic Images
import ar_img1 from "../assets/Ar/1.png";
import ar_img2 from "../assets/Ar/2.png";
import ar_img3 from "../assets/Ar/3.png";
import ar_img4 from "../assets/Ar/4.png";
import ar_img5 from "../assets/Ar/5.png";

// --- 3. Create two separate item lists ---

const items_en = [
  { src: en_img1, altText: "Review 1", key: 1 },
  { src: en_img2, altText: "Review 2", key: 2 },
  { src: en_img3, altText: "Review 3", key: 3 },
  { src: en_img4, altText: "Review 4", key: 4 },
  { src: en_img5, altText: "Review 5", key: 5 },
];

const items_ar = [
  { src: ar_img1, altText: "تقييم 1", key: 1 },
  { src: ar_img2, altText: "تقييم 2", key: 2 },
  { src: ar_img3, altText: "تقييم 3", key: 3 },
  { src: ar_img4, altText: "تقييم 4", key: 4 },
  { src: ar_img5, altText: "تقييم 5", key: 5 },
];

// --- 4. Add translations for the title ---
const content = {
  en: {
    title: "Reviews",
  },
  ar: {
    title: "آراء العملاء",
  },
};

function Reviews(args) {
  const { lang } = useLanguage(); // <-- 5. Get the current language
  const items = lang === "ar" ? items_ar : items_en; // <-- 6. Select the correct list
  const t = content[lang]; // <-- 7. Select the correct text

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // All the functions below (next, previous, goToIndex)
  // will now work with the correct language-specific 'items' array.

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
    // <-- 8. Add the 'rtl' class for Arabic
    <section id="reviews" className={lang === "ar" ? "rtl" : ""}>
      <h1 className="d-flex justify-content-center mb-5">{t.title}</h1>
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