import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useLanguage } from "./LanguageContext"; // 1. Import the hook
import "./Contact.css";
import { FaX } from "react-icons/fa6";

// 2. Define translations and contact data
const content = {
  en: {
    title: "Contact Me",
    intro: "You can reach me through the following platforms:",
    emailLabel: "            Email:",
    email: "Sofian.shublaq@gmail.com",
    locationLabel: "Location:",
    location: "Indonesia – Working Worldwide",
    platformsNote: "  Facebook / Instagram / TikTok / X / YouTube / LinkedIn",
    footerName: "Sofian Shublaq | Founder of Shublaq Studios",
  },
  ar: {
    title: "تواصل معي",
    intro: "يمكنك التواصل معي عبر المنصات التالية:",
    emailLabel: "                   البريد الالكتروني:",
    email: "Sofian.shublaq@gmail.com",
    locationLabel: "      الموقع:",
    location: "إندونيسيا – للعمل عالمياً",
    platformsNote: "  Facebook / Instagram / TikTok / X / YouTube / LinkedIn",
    footerName: "سفيان شبلاق | مؤسس شبلاق ستوديو",
  },
};

const Contact = () => {
  const { lang } = useLanguage(); // 3. Get current language
  const t = content[lang]; // 4. Select correct text

  // platform buttons (replace URLs as needed)
  const platforms = [
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/ShublaqStudios.Voiceover",
      name: "Facebook",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/shublaq.studios/",
      name: "Instagram",
    },
    {
      icon: <SiTiktok />,
      url: "https://www.tiktok.com/@shublaqstudios",
      name: "TikTok",
    },
    { icon: <FaX />, url: "https://x.com/ShublaqStudios" },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@shublaq.studios",
      name: "YouTube",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/sofian-shublaq/",
      name: "LinkedIn",
    },
  ];

  return (
    // 5. Add 'rtl' class conditionally
    <section
      id="contact"
      className={`contact-section ${lang === "ar" ? "rtl" : ""}`}
    >
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* 6. Use translated text */}
        <h1 className="contact-title">{t.title}</h1>
        <p className="contact-subtitle">{t.intro}</p>

        <div className="contact-lines">
          <p>
            <FaEnvelope />
            <strong>{t.emailLabel}</strong>&nbsp;
            <a href={`mailto:${t.email}`} className="contact-link ">
              {t.email}
            </a>
          </p>
          <p>
            <FaMapMarkerAlt style={{ marginRight: 8 }} />
            <strong>{t.locationLabel}</strong>&nbsp;{t.location}
          </p>
        </div>

        <motion.div
          className="platform-list"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {platforms.map((p, i) => {
            const iconOnly = !p.name;
            return (
              <a
                key={i}
                className={`platform-btn ${iconOnly ? "icon-only" : ""}`}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="platform-icon">{p.icon}</span>
                {p.name && <span className="platform-name">{p.name}</span>}
              </a>
            );
          })}
        </motion.div>

        <p className="footer-note">
          {t.footerName} {new Date().getFullYear()} ©
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
