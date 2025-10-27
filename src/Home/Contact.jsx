import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { useLanguage } from "./LanguageContext"; // 1. Import the hook
import "./Contact.css";

// 2. Define translations
const content = {
  en: {
    title: "Let’s Connect",
    subtitle: "You can find me on the platforms below 👇",
    footerName: "Sofian Shublaq",
  },
  ar: {
    title: "لنتواصل",
    subtitle: "يمكنك إيجادي على المنصات التالية 👇",
    footerName: "سفيان شبلاق",
  },
};

const Contact = () => {
  const { lang } = useLanguage(); // 3. Get current language
  const t = content[lang]; // 4. Select correct text

  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/s.shublaq/",
      name: "Instagram",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/sofian-shublaq/",
      name: "LinkedIn",
    },
    {
      icon: <FaWhatsapp />,
      url: "https://wa.me/+6281360407597",
      name: "Whatsapp",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:Sofian.Shublaq@gmail.com",
      name: "Email",
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
        <p className="contact-subtitle">{t.subtitle}</p>

        <motion.div
          className="social-links"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* 7. Use translated footer text */}
        <p className="footer-note">
          © {new Date().getFullYear()} {t.footerName}
        </p>
      </motion.div>
    </section>
  );
};

export default Contact;
