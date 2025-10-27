import React from "react";
import { motion } from "framer-motion";
import "./CV.css";

const CV = () => {
  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="cv"
      className="cv-section"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h1 className="cv-title" variants={item}>
          My CV
        </motion.h1>
        <motion.p className="cv-subtitle" variants={item}>
          A quick overview of my journey — experience, education, and skills.
        </motion.p>

        <div className="cv-content">
          {/* LEFT COLUMN — ABOUT & EXPERIENCE */}
          <motion.div className="cv-left" variants={container}>
            <motion.div className="cv-card" variants={item}>
              <h2>About Me</h2>
              <p>
                I’m a passionate <span>Front-End Developer</span> who loves building clean,
                dynamic, and visually appealing interfaces. I thrive on transforming ideas
                into seamless user experiences. {/* 👈 Replace this later */}
              </p>
            </motion.div>

            <motion.div className="cv-card" variants={item}>
              <h2>Experience</h2>
              <div className="cv-item">
                <h3>Front-End Engineer — <span>Company Name</span></h3>
                <p className="cv-date">2022 – Present</p>
                <p>
                  Describe your responsibilities and achievements here. Example:
                  Built responsive interfaces, optimized performance, and led UI design
                  improvements.
                </p>
              </div>

              <div className="cv-item">
                <h3>Web Developer — <span>Previous Company</span></h3>
                <p className="cv-date">2020 – 2022</p>
                <p>
                  Contributed to multiple projects across eCommerce and SaaS platforms.
                  Focused on accessibility and UX quality.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — EDUCATION & SKILLS */}
          <motion.div className="cv-right" variants={container}>
            <motion.div className="cv-card" variants={item}>
              <h2>Education</h2>
              <div className="cv-item">
                <h3>Bachelor’s Degree in Computer Science</h3>
                <p className="cv-date">2017 – 2021</p>
                <p>University Name — Add your major, GPA, or achievements.</p>
              </div>

              <div className="cv-item">
                <h3>Frontend Specialization</h3>
                <p className="cv-date">Online / Certificate Course</p>
                <p>Example: React, TypeScript, and UI Design Certification.</p>
              </div>
            </motion.div>

            <motion.div className="cv-card" variants={item}>
              <h2>Skills</h2>
              <ul className="cv-skills">
                <li>React.js / Next.js</li>
                <li>TypeScript / JavaScript (ES6+)</li>
                <li>HTML5 / CSS3 / TailwindCSS</li>
                <li>Framer Motion / GSAP Animations</li>
                <li>UI / UX Collaboration</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="cv-download" variants={item}>
          <button className="btn-download">Download CV</button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CV;
