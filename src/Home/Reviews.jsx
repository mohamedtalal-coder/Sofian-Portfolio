import React, { useState, memo, useCallback } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { useLanguage } from "./LanguageContext";
import "./Reviews.css";

// English reviews - Cloudinary URLs
const en_img1 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648669/1_acjeqh.png";
const en_img2 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648669/2_tjmx3p.png";
const en_img3 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648670/3_uhulmv.png";
const en_img4 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648677/4_xkh8jn.png";
const en_img5 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648677/5_igz3nn.png";
const en_img6 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648677/6_hg2l1v.png";
const en_img7 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648680/7_npjh4j.png";
const en_img8 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648681/8_xzjmyk.png";
const en_img9 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648682/9_tgku6m.png";
const en_img10 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648683/10_szhoxb.png";

// Arabic reviews - Cloudinary URLs
const ar_img1 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648523/1_cu913j.png";
const ar_img2 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648523/2_bpgw89.png";
const ar_img3 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648523/3_fwyat3.png";
const ar_img4 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648524/4_bglyod.png";
const ar_img5 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648524/5_tmqyle.png";
const ar_img6 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648524/6_aizghi.png";
const ar_img7 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648524/7_xgzgzu.png";
const ar_img8 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648524/8_gn4e5g.png";
const ar_img9 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648531/9_nnyeej.png";
const ar_img10 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768648532/10_yp1ikr.png";

// --- 3. Create two separate item lists ---

const items_en = [
  { src: en_img1, altText: "Review 1", key: 1 },
  { src: en_img2, altText: "Review 2", key: 2 },
  { src: en_img3, altText: "Review 3", key: 3 },
  { src: en_img4, altText: "Review 4", key: 4 },
  { src: en_img5, altText: "Review 5", key: 5 },
  { src: en_img6, altText: "Review 6", key: 6 },
  { src: en_img7, altText: "Review 7", key: 7 },
  { src: en_img8, altText: "Review 8", key: 8 },
  { src: en_img9, altText: "Review 9", key: 9 },
  { src: en_img10, altText: "Review 10", key: 10 },
];

const items_ar = [
  { src: ar_img1, altText: "تقييم 1", key: 1 },
  { src: ar_img2, altText: "تقييم 2", key: 2 },
  { src: ar_img3, altText: "تقييم 3", key: 3 },
  { src: ar_img4, altText: "تقييم 4", key: 4 },
  { src: ar_img5, altText: "تقييم 5", key: 5 },
  { src: ar_img6, altText: "تقييم 6", key: 6 },
  { src: ar_img7, altText: "تقييم 7", key: 7 },
  { src: ar_img8, altText: "تقييم 8", key: 8 },
  { src: ar_img9, altText: "تقييم 9", key: 9 },
  { src: ar_img10, altText: "تقييم 10", key: 10 },
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
  const { lang } = useLanguage();
  const items = lang === "ar" ? items_ar : items_en;
  const t = content[lang];

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = useCallback(() => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }, [animating, activeIndex, items.length]);

  const previous = useCallback(() => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }, [animating, activeIndex, items.length]);

  const goToIndex = useCallback((newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }, [animating]);

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="w-75" loading="lazy" />
      </CarouselItem>
    );
  });

  return (
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

export default memo(Reviews);