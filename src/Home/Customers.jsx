import React from "react";
import { motion } from "framer-motion";
import "./Customers.css";
// import mic from "../assets/Picture1.png";

function Customers() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      color: "#c084fc",
      textShadow: "0 0 10px rgba(192,132,252,0.6)",
      transition: { duration: 0.3 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="customers"
      className="Customers-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container text-center mb-5">
        <h1 className="Customers-title">Featured Customers</h1>
        <p className="subtitle">
          A few of the amazing brands and teams I’ve collaborated with.
        </p>
      </div>

      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          {/* Customers List */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <motion.div
              className="Customers-box"
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <ul className="d-flex flex-column justify-content-center">
                {[
                  "Nebula Digital — Creative Media Agency",
                  "Aurora Tech Labs — AI & Automation",
                  "Eclipse Marketing — Branding & Strategy",
                  "Stellar Sound Studios — Voiceover Production",
                  "Orbit Real Estate — Property Branding",
                  "Luna Media — YouTube Network Partner",
                ].map((client, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover="hover"
                  >
                    <i className="fa fa-microphone"></i>
                    <span className={index % 2 === 0 ? "highlight" : ""}>
                      {client}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Animated Microphone */}
          <div className="col-12 col-md-6 d-flex justify-content-center mic-container m-auto">
            <motion.img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGN4dTg5bnhsOXJqcXBidTRlYmx6czRhZzN2M3BheG5rcXd1Z2xhbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/r42iXcmLhz2MtIWkCv/giphy.gif"
              alt="Microphone illustration"
              className="mic-img"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              animate="float"
              viewport={{ once: true }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Customers;
