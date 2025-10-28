import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
import "./Clients.css";
import { useLanguage } from "./LanguageContext";

// ✅ 1. IMPORT ALL YOUR LOGO IMAGES HERE
import logo1 from "../assets/logos/Adnoc.png";
import logo2 from "../assets/logos/Al Jouf University saudi.jpg";
import logo3 from "../assets/logos/Awqaf qatar.png";
import logo4 from "../assets/logos/Cyber Security Council uae.jpg";
import logo5 from "../assets/logos/Delta Force.png";
import logo6 from "../assets/logos/Doha Bank qatar.png";
import logo7 from "../assets/logos/Emirates Airlines.png";
import logo8 from "../assets/logos/Emirates Steel uae.png";
import logo9 from "../assets/logos/Free fire.png";
import logo10 from "../assets/logos/Harvard University.png";
import logo11 from "../assets/logos/Huawei.png";
import logo12 from "../assets/logos/International Labour Organization – Qatar branch, government..png";
import logo13 from "../assets/logos/Islam web.jpg";
import logo14 from "../assets/logos/Jarir Bookstore saudi.png";
import logo15 from "../assets/logos/Listerine.png";
import logo16 from "../assets/logos/MWANI Qatar.jpg";
import logo17 from "../assets/logos/Magneti Marelli.png";
import logo18 from "../assets/logos/Ministry of Energy and Infrastructure uae.jpg";
import logo19 from "../assets/logos/Ministry of Justice qatar.jpg";
import logo20 from "../assets/logos/Mobile legends.png";
import logo21 from "../assets/logos/Moscow Kremlin Museum.png";
import logo22 from "../assets/logos/NSW.jpg";
import logo23 from "../assets/logos/Neutrogena.png";
import logo24 from "../assets/logos/Olymp Trade.jpg";
import logo25 from "../assets/logos/Orange.png";
import logo26 from "../assets/logos/Pepsico.png";
import logo27 from "../assets/logos/Pubg mobile.png";
import logo28 from "../assets/logos/QIB Bank qatar.png";
import logo29 from "../assets/logos/Qatar Communications Regulatory Authority.jpg";
import logo30 from "../assets/logos/Social Development Bank saudi.jpg";
import logo31 from "../assets/logos/Stc.jpg";
import logo32 from "../assets/logos/Taif University saudi.jpg";
import logo33 from "../assets/logos/UDC qatar.png";
import logo34 from "../assets/logos/University of Qatar.png";
import logo35 from "../assets/logos/Victoria State.jpg";
import logo36 from "../assets/logos/Vodafone.png";

// ... rest of your component code

const Clients = () => {
  const { lang } = useLanguage(); // 2. Get lang

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // 3. Create content object
  const content = {
    en: {
      title: "My Clients",
      subtitle: "A selection of the super clients i have had the pleasure of working with",
    },
    ar: {
      title: "عملائي",
      subtitle: "مجموعة مختارة من العملاء الرائعين الذين سعدت بالعمل معهم.",
    },
  };

  const t = content[lang]; // 4. Select text

 // ... (imports and content object above) ...


  // ... (containerVariants, content object, and t variable) ...

  // ✅ 2. Use the imported image variables directly in the array
  const clientLogos = [
    // --- Slide 1 ---
    logo1,
    logo2,
    logo3,
    logo4, 
    logo5,
    logo6,
    logo7, 
    logo8,
    logo9, 
    logo10,
    logo11, 
    logo12,
    logo13,
    logo14,
    logo15, 
    logo16,
    logo17, 
    logo18, 
    logo19, 
    logo20,
    logo21,
    logo22, 
    logo23, 
    logo24, 
    logo25,
    logo26, 
    logo27,
    logo28,
    logo29,
    logo30,
    logo31,
    logo32,
    logo33,
    logo34,
    logo35,
    logo36
  ];

  // ... rest of your component code
  // --- Carousel Logic ---
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  // 1. Chunk logos into groups of 6
  const logoSlides = [];
  const slideSize = 6; // ✅ 6 logos per slide
  for (let i = 0; i < clientLogos.length; i += slideSize) {
    logoSlides.push(clientLogos.slice(i, i + slideSize));
  }

  // 2. Carousel functions (no changes)
  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === logoSlides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? logoSlides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
// ... (Carousel Logic above) ...

  // 3. Create the <CarouselItem> components
  const slides = logoSlides.map((slideLogos, index) => { // Changed 'slideDomains' to 'slideLogos' for clarity
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <div className="row justify-content-center align-items-stretch carousel-row gy-4">
          {slideLogos.map((logoSrc, innerIndex) => ( // Changed 'domain' to 'logoSrc'
            <div
              className="col-5 col-sm-4 col-md-4 d-flex justify-content-center align-items-center client-logo-container"
              key={innerIndex}
            >
              <img
                src={logoSrc} // ✅ Use the imported image source directly
                alt={`Client logo ${index * slideSize + innerIndex + 1}`} // A more generic alt text
                className="client-logo"
                
              />
            </div>
          ))}
        </div>
      </CarouselItem>
    );
  });

// ... rest of your component code

  // 4. Create items for the indicators (no changes)
  const indicatorItems = logoSlides.map((slide, index) => ({
    src: index,
    key: index,
  }));

  return (
    <motion.section
      id="Clients"
      // 5. Add RTL class
      className={`Clients-section d-flex flex-column justify-content-center ${lang === "ar" ? "rtl" : ""}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container text-center mb-5">
        {/* 6. Use translated text */}
        <h1 className="Clients-title">{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
      </div>

      <div className="container-fluid">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          dark={true}
        >
          <CarouselIndicators
            items={indicatorItems}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />

          {slides}
        </Carousel>
      </div>
    </motion.section>
  );
}
;

export default Clients;