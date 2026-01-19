import React, { useRef, useEffect, useState, memo } from "react";
import { motion, useAnimation } from "framer-motion";
import "./Clients.css";
import { useLanguage } from "./LanguageContext";

// ✅ Cloudinary URLs for logos
const logo1 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646833/Adnoc_onzv2k.png";
const logo2 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646835/Al_Jouf_University_saudi_aublsq.png";
const logo3 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646835/Awqaf_qatar_chsgia.png";
const logo4 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646835/Cyber_Security_Council_uae_fc19tr.png";
const logo5 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646835/Delta_Force_sydmnv.png";
const logo6 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646835/Doha_Bank_qatar_j4jrj0.png";
const logo7 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646836/Emirates_Airlines_rnwrhc.png";
const logo8 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646836/Emirates_Steel_uae_aaeupb.png";
const logo9 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646836/Free_fire_tpeiqa.png";
const logo10 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646841/Harvard_University_d75erg.png";
const logo11 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646841/Huawei_d5ecwo.png";
const logo12 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646841/International_Labour_Organization_Qatar_branch_government._q524e0.png";
const logo13 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646842/Islam_web_q72usk.png";
const logo14 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646842/Jarir_Bookstore_saudi_qkp51z.png";
const logo15 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646842/Listerine_z92fwu.png";
const logo16 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646882/MWANI_Qatar_yubjds.png";
const logo17 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646869/Magneti_Marelli_r4tyeb.png";
const logo18 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646881/Ministry_of_Energy_and_Infrastructure_uae_up3n52.png";
const logo19 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646884/Ministry_of_Justice_qatar_xmrvgz.png";
const logo20 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646881/Mobile_legends_fmbgcu.png";
const logo21 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646881/Moscow_Kremlin_Museum_xjxjoh.png";
const logo22 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646884/NSW_ltizdj.png";
const logo23 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646882/Neutrogena_f7ay0b.png";
const logo24 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646883/Olymp_Trade_bcszi9.png";
const logo25 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646888/Orange_bpv3ra.png";
const logo26 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646888/Pepsico_gbvq8w.png";
const logo27 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646889/Pubg_mobile_qmelgv.png";
const logo28 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646893/QIB_Bank_qatar_quzz8h.png";
const logo29 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646889/Qatar_Communications_Regulatory_Authority_t0xvbe.jpg";
const logo30 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646893/Social_Development_Bank_saudi_grpj0f.png";
const logo31 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646893/Stc_sctaqo.jpg";
const logo32 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646893/Taif_University_saudi_zzeso7.png";
const logo33 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646894/UDC_qatar_rlj2h2.png";
const logo34 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646899/University_of_Qatar_mhefjr.png";
const logo35 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646905/Victoria_State_mjmfcz.png";
const logo36 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646900/Vodafone_xmlizn.jpg";
const logo37 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646836/AOE_ghe3qx.webp";
const logo38 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646888/oneState_xrnmvi.webp";
const logo39 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646900/Zain_Sudan_yu1v4s.png";
const logo40 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646901/Woolworths_bzvud1.png";
const logo41 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646902/Wonderful_indonesia_ob6xj7.png";
const logo42 = "https://res.cloudinary.com/dczhvcc0v/image/upload/v1768646888/Omantel_x7uq28.png";

// Memoized logo item to prevent unnecessary re-renders
const LogoItem = memo(({ logo }) => (
  <motion.div className="logo-item">
    <img
      src={logo}
      alt=""
      draggable="false"
      loading="lazy"
      onDragStart={(e) => e.preventDefault()}
    />
  </motion.div>
));

const clientLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20,
  logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30,
  logo31, logo32, logo33, logo34, logo35, logo36, logo37, logo38, logo39, logo40,
  logo41, logo42,
];

const Clients = () => {
  const { lang } = useLanguage();
  const [width, setWidth] = useState(0);
  const [scrollDuration, setScrollDuration] = useState(60);
  const carouselRef = useRef();
  const controls = useAnimation();

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
            <LogoItem key={i} logo={logo} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default memo(Clients);
