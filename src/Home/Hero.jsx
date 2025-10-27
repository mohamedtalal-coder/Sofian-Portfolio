import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profileImg from "../assets/pfp.jpg";
import { useLanguage } from "./LanguageContext"; // 1. Import the hook

// 2. Create the content object
const content = {
  en: {
    greeting: "Hi, I’m ",
    name: "Sofian Shublaq",
    description: `
      <strong>Voiceover Artist </strong>| Bilingual Arabic/English | 2500+ Projects
      Delivered | Trusted by Emirates, Vodafone, Huawei & Gov Agencies |
      Expert in Commercials, IVR, eLearning, Games, Documentaries & More
    `,
    button1: "Reserved", // You can change this
    button2: "Reserved", // You can change this
  },
  ar: {
    greeting: "مرحباً، أنا ",
    name: "سفيان شبلاق",
    description: `
      <strong>معلق صوتي</strong> | ثنائي اللغة (عربي/إنجليزي) | أكثر من 2500
      مشروع | موثوق به من قبل طيران الإمارات، فودافون، هواوي وجهات حكومية |
      خبير في الإعلانات، الرد الآلي، التعليم الإلكتروني، الألعاب، الوثائقيات والمزيد
    `,
    button1: "محجوز", // You can change this
    button2: "محجوز", // You can change this
  },
};

const Hero = () => {
  // 3. Get the current language
  const { lang } = useLanguage();

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* 🧠 Text Section */}
        <motion.div
          className="hero-text m-5"
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
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn primary"
            >
              {content[lang].button1}
            </motion.button>
            <motion.button
              whileHover={{ y: -3, color: "#00b4d8", borderColor: "#00b4d8" }}
              whileTap={{ scale: 0.95 }}
              className="btn secondary"
            >
              {content[lang].button2}
            </motion.button>
          </div>
        </motion.div>

        {/* 🧠 Image Section (No text changes needed here) */}
        <motion.div
          className="hero-image m-5"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div
            className="image-mask"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity, // Added repeat for a continuous floating effect
            }}
          >
            <img src={profileImg} alt="Profile" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;