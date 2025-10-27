import React from "react";
import { motion } from "framer-motion";
import "./Customers.css";
import { useLanguage } from "./LanguageContext"; // ✅ Make sure to import this
import photo from "../assets/pfp.jpg";

const Customers = () => {
  const { lang } = useLanguage();

  // ✅ Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // ✅ Customer Data
  const clients = [
    {
      en: "Emirates – Major International Airline (Private)",
      ar: "طيران الإمارات – شركة طيران دولية كبرى (خاصة)",
    },
    {
      en: "PepsiCo – Global Food & Beverage Corporation (Private)",
      ar: "بيبسيكو – شركة عالمية للأغذية والمشروبات (خاصة)",
    },
    {
      en: "Huawei – Multinational Technology Company (Private)",
      ar: "هواوي – شركة تكنولوجيا متعددة الجنسيات (خاصة)",
    },
    {
      en: "Vodafone – Global Telecommunications Company (Private)",
      ar: "فودافون – شركة اتصالات عالمية (خاصة)",
    },
    {
      en: "STC – Saudi Telecom Company (Government-Owned)",
      ar: "شركة الاتصالات السعودية – مملوكة للحكومة",
    },
    {
      en: "ADNOC – Abu Dhabi National Oil Company (Government)",
      ar: "أدنوك – شركة بترول أبوظبي الوطنية (حكومية)",
    },
    {
      en: "Australian Government (Victoria & NSW)",
      ar: "الحكومة الأسترالية – ولايتي فكتوريا ونيو ساوث ويلز",
    },
    {
      en: "Ministry of Justice – Qatar",
      ar: "وزارة العدل – قطر",
    },
  ];

  // ✅ Section Titles
  const titles = {
    en: {
      main: "Featured Customers",
      subtitle: "Brands and organizations I’ve collaborated with.",
    },
    ar: {
      main: "العملاء المميزون",
      subtitle: "العلامات التجارية والمؤسسات التي تعاونت معها.",
    },
  };

  return (
    <motion.section
      id="customers"
      className={`Customers-section ${lang === "ar" ? "rtl" : ""}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container text-center mb-5">
        <h1 className="Customers-title">{titles[lang].main}</h1>
        <p className="subtitle">{titles[lang].subtitle}</p>
      </div>

      <div className="container-fluid">
        <div className="row d-flex align-items-center justify-content-center">
          {/* 🟣 Left: Customers List */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <motion.div
              className="Customers-box"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.ul className="d-flex flex-column justify-content-center">
                {clients.map((client, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <i className="fa fa-microphone"></i>
                    <span>{lang === "ar" ? client.ar : client.en}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* 🎙️ Right: Static Microphone Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <motion.img
              src={photo}
              alt="myPhoto"
              className="mic-img"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Customers;
