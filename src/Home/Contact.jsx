import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://facebook.com/", name: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com/", name: "Instagram" },
    { icon: <FaLinkedinIn />, url: "https://linkedin.com/", name: "LinkedIn" },
    { icon: <FaGithub />, url: "https://github.com/", name: "GitHub" },
    { icon: <FaEnvelope />, url: "mailto:example@email.com", name: "Email" },
  ];

  return (
    <section id="contact" className="contact-section">
      <motion.div
        className="contact-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="contact-title">Let’s Connect</h1>
        <p className="contact-subtitle">
          You can find me on the platforms below 👇
        </p>

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

        <p className="footer-note">© {new Date().getFullYear()} Your Name</p>
      </motion.div>
    </section>
  );
};

export default Contact;
