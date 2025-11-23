import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profileImg from "../assets/Customers.jpg";
import { useLanguage } from "./LanguageContext"; // language hook

// Contact URL: set to your preferred communication method (LinkedIn by default)
const CONTACT_URL = "https://www.linkedin.com/in/sofian-shublaq/";

const content = {
  en: {
    greeting: "👋 Hello, I’m ",
    nameLine: "Sofian Shublaq | Founder of Shublaq Studios",
    subtitle: "Arabic–English Voiceover Artist | A global voice for businesses, institutions, and gaming",
    stats: "More than +2500 voiceover projects",
    trusted:
      "Trusted by: Emirates Airline – Vodafone – Huawei – Ministry of Justice – Harvard University – Free Fire – PUBG – Qatar, UAE, and Australia.",
    specializedTitle: "Specialized in:",
    specializedList:
      "Commercials – Gaming – IVR – eLearning – Documentaries – Government Projects – Corporate Content",
    tagline: "A global voice… with an unmistakably authentic Arabic identity.",
    contactButton: "Contact Me",
  },
  ar: {
    greeting: "👋 مرحباً، أنا ",
    nameLine: "سفيان شبلاق | مؤسس شبلاق ستوديو",
    subtitle: "معلق صوتي عربي–إنجليزي | صوت عالمي للأعمال والمؤسسات والألعاب",
    stats: "أكثر من 2500+ مشروع صوتي",
    trusted:
      "موثوق به من قبل: طيران الإمارات – فودافون – هواوي – وزارة العدل – جامعة هارفارد – فري فاير – ببجي – قطر، الإمارات، وأستراليا.",
    specializedTitle: "متخصص في:",
    specializedList:
      "الإعلانات – الألعاب – الرد الآلي – التعليم الإلكتروني – الوثائقيات – المشاريع الحكومية – المحتوى المؤسسي",
    tagline: "صوت عالمي… بهوية عربية لا تخطئها الأذن.",
    contactButton: "تواصل معي",
  },
};

const Hero = () => {
  // 3. Get the current language
  const { lang } = useLanguage();

  // contact link (editable above)
  const contactLink = CONTACT_URL;

  const handleMouseEnter = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    button.style.setProperty("--mouse-x", `${x}px`);
    button.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* 🧠 Text Section */}
        <motion.div 
          className="hero-text "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* 4. Update the text fields */}
          <h2 className="hero-greeting">{content[lang].greeting}</h2>
          <h1 className="hero-name">{content[lang].nameLine}</h1>
          <p className="hero-subtitle">{content[lang].subtitle}</p>

          <p className="hero-stats">{content[lang].stats}</p>

          <p className="hero-trusted">{content[lang].trusted}</p>

          <h3 className="hero-specialized-title">{content[lang].specializedTitle}</h3>
          <p className="hero-specialized-list">{content[lang].specializedList}</p>

          <p className="hero-tagline"><strong>{content[lang].tagline}</strong></p>

          <div className="hero-buttons">
            <a
              href={contactLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn contact-btn"
              onMouseEnter={handleMouseEnter}
            >
              {content[lang].contactButton}
            </a>
          </div>
        </motion.div>

        {/* 🧠 Image Section (No text changes needed here) */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="image-mask">
            <img src={profileImg} alt="Profile" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
