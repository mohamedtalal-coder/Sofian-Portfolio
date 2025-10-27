import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profileImg from "../assets/Customers.jpg";
import { useLanguage } from "./LanguageContext"; // 1. Import the hook

// 2. Create the content object
const content = {
  en: {
    greeting: "Hi, I'm ",
    name: "Sofian Shublaq",
    description: `
      <strong>Voiceover Artist </strong>| Bilingual Arabic/English | 2500+ Projects
      Delivered | Trusted by Emirates, Vodafone, Huawei & Gov Agencies |
      Expert in Commercials, IVR, eLearning, Games, Documentaries & More
    `,
    contactButton: "Contact Me",
  },
  ar: {
    greeting: "مرحباً، أنا ",
    name: "سفيان شبلاق",
    description: `
      <strong>معلق صوتي</strong> | ثنائي اللغة (عربي/إنجليزي) | أكثر من 2500
      مشروع | موثوق به من قبل طيران الإمارات، فودافون، هواوي وجهات حكومية |
      خبير في الإعلانات، الرد الآلي، التعليم الإلكتروني، الألعاب، الوثائقيات والمزيد
    `,
    contactButton: "تواصل معي",
  },
};

const Hero = () => {
  // 3. Get the current language
  const { lang } = useLanguage();

  // WhatsApp link
  const whatsappLink = "https://wa.me/+6281360407597"; // Replace with actual WhatsApp number

  const handleMouseEnter = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    button.style.setProperty('--mouse-x', `${x}px`);
    button.style.setProperty('--mouse-y', `${y}px`);
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
          <h1>
            {content[lang].greeting}
            <span>{content[lang].name}</span>
          </h1>
          {/* Using dangerouslySetInnerHTML to keep the <strong> tag */}
          <p
            dangerouslySetInnerHTML={{
              __html: content[lang].description,
            }}
          />

          <div className="hero-buttons">
            <a 
              href={whatsappLink} 
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