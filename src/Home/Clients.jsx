import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Clients.css";
import { useLanguage } from "./LanguageContext";

// ✅ Import all logos
import logo1 from "../assets/logos/Adnoc.png";
import logo2 from "../assets/logos/Al Jouf University saudi.png";
import logo3 from "../assets/logos/Awqaf qatar.png";
import logo4 from "../assets/logos/Cyber Security Council uae.png";
import logo5 from "../assets/logos/Delta Force.png";
import logo6 from "../assets/logos/Doha Bank qatar.png";
import logo7 from "../assets/logos/Emirates Airlines.png";
import logo8 from "../assets/logos/Emirates Steel uae.png";
import logo9 from "../assets/logos/Free fire.png";
import logo10 from "../assets/logos/Harvard University.png";
import logo11 from "../assets/logos/Huawei.png";
import logo12 from "../assets/logos/International Labour Organization – Qatar branch, government..png";
import logo13 from "../assets/logos/Islam web.png";
import logo14 from "../assets/logos/Jarir Bookstore saudi.png";
import logo15 from "../assets/logos/Listerine.png";
import logo16 from "../assets/logos/MWANI Qatar.png";
import logo17 from "../assets/logos/Magneti Marelli.png";
import logo18 from "../assets/logos/Ministry of Energy and Infrastructure uae.png";
import logo19 from "../assets/logos/Ministry of Justice qatar.png";
import logo20 from "../assets/logos/Mobile legends.png";
import logo21 from "../assets/logos/Moscow Kremlin Museum.png";
import logo22 from "../assets/logos/NSW.png";
import logo23 from "../assets/logos/Neutrogena.png";
import logo24 from "../assets/logos/Olymp Trade.png";
import logo25 from "../assets/logos/Orange.png";
import logo26 from "../assets/logos/Pepsico.png";
import logo27 from "../assets/logos/Pubg mobile.png";
import logo28 from "../assets/logos/QIB Bank qatar.png";
import logo29 from "../assets/logos/Qatar Communications Regulatory Authority.png";
import logo30 from "../assets/logos/Social Development Bank saudi.png";
import logo31 from "../assets/logos/Stc.jpg";
import logo32 from "../assets/logos/Taif University saudi.png";
import logo33 from "../assets/logos/UDC qatar.png";
import logo34 from "../assets/logos/University of Qatar.png";
import logo35 from "../assets/logos/Victoria State.png";
import logo36 from "../assets/logos/Vodafone.png";
import logo37 from "../assets/logos/AOE.png";
import logo38 from "../assets/logos/oneState.png";
import logo39 from "../assets/logos/Zain Sudan.png";
import logo40 from "../assets/logos/Woolworths.png";
import logo41 from "../assets/logos/Wonderful indonesia.png";
import logo42 from "../assets/logos/Omantel.png";

const Clients = () => {
  const { lang } = useLanguage();
  const [width, setWidth] = useState(0);
  const [scrollDuration, setScrollDuration] = useState(60);
  const carouselRef = useRef();
  const controls = useAnimation();

  const clientLogos = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
    logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
    logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
    logo31, logo32, logo33, logo34, logo35, logo36, logo37, logo38, logo39, logo40,
    logo41, logo42,
  ];

  // ✅ Measure scroll width
  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  // ✅ Adjust scroll speed based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) setScrollDuration(90);
      else if (window.innerWidth < 992) setScrollDuration(70);
      else setScrollDuration(60);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Continuous auto-scroll (RTL or LTR)
  useEffect(() => {
    controls.start({
      x: lang === "ar" ? [-width, 0] : [0, -width],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: scrollDuration,
          ease: "linear",
        },
      },
    });
  }, [width, controls, lang, scrollDuration]);

  const content = {
    en: {
      title: "My Clients",
      subtitle:
        "A selection of the super clients I have had the pleasure of working with",
    },
    ar: {
      title: "عملائي",
      subtitle: "مجموعة مختارة من العملاء الرائعين الذين سعدت بالعمل معهم.",
    },
  };

  const t = content[lang];

  return (
    <motion.section
      id="Clients"
      className={`Clients-section d-flex flex-column justify-content-center ${
        lang === "ar" ? "rtl" : ""
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container text-center mb-5">
        <h1 className="Clients-title">{t.title}</h1>
        <p className="subtitle">{t.subtitle}</p>
      </div>

      <motion.div ref={carouselRef} className="logos-carousel bg-white">
        <motion.div
          className="logos-inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
          animate={controls}
        >
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <motion.div className="logo-item" key={i}>
              <img
                src={logo}
                alt={`Client ${i}`}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Clients;
