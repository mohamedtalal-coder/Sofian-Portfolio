import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";
import "./CV.css";

const CV = () => {
  const { lang } = useLanguage();

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

  const content = {
    en: {
      title: "My CV",
      subtitle: "A glimpse into my professional voiceover journey.",
      aboutTitle: "About Me",
      about: `I’m a bilingual Arabic–English voiceover artist with over 7 years of global experience. 
      I deliver premium-quality recordings for international brands, agencies, and government entities. 
      My portfolio includes commercials, eLearning, gaming, IVR, documentaries, and corporate narration. 
      I operate from a professional Whisper Room studio, providing crystal-clear audio and fast turnaround.`,
      experienceTitle: "Experience",
      experience: [
        {
          role: "Freelance Voiceover Artist & Creative Consultant",
          company: "Worldwide (Remote)",
          date: "Nov 2018 – Present",
          details:
            "Delivered 2500+ voiceover projects for telecom, eLearning, gaming, and government clients including Emirates, Huawei, PepsiCo, Vodafone, and ADNOC. Specialized in bilingual recording, translation, and creative localization.",
        },
        {
          role: "Voiceover Artist & Esports Caster – Free Fire (Garena)",
          company: "Indonesia / MENA Server",
          date: "Apr 2020 – Feb 2023",
          details:
            "Official Arabic Shoutcaster for Free Fire tournaments. Delivered Arabic commentary across 15+ events, sponsored by Huawei and Zain, enhancing engagement and broadcast quality.",
        },
        {
          role: "Marketing & Maintenance Manager",
          company: "Golden Life for Mobiles, Jordan",
          date: "Aug 2015 – Jul 2018",
          details:
            "Managed B2B sales, customer relations, and technical service operations. Directed repair teams and implemented marketing programs.",
        },
      ],
      educationTitle: "Education",
      education: [
        {
          degree: "Bachelor’s Degree in Marketing",
          institution: "Applied Science University, Jordan",
          date: "2008 – 2014",
        },
      ],
      skillsTitle: "Key Skills & Tools",
      skills: [
        "Arabic & English Voiceover",
        "Scriptwriting & Translation",
        "IVR / Commercial / E-Learning / Game VO",
        "Studio One 5 DAW | Whisper Room Setup",
        "Adobe Audition | Audio Editing",
        "RODE NT1 | Focusrite G3 | DT770 Pro",
      ],
      awardsTitle: "Awards & Certifications",
      awards: [
        {
          title: "Certified Voiceover Professional",
          issuer: "Voices Academy, 2023",
        },
        {
          title: "Voice Acting & Audio Production Diploma",
          issuer: "Online Voiceover School, 2022",
        },
        {
          title: "Certificate of Excellence in Arabic Narration",
          issuer: "Arab Media Summit, 2021",
        },
      ],
    },
    ar: {
      title: "السيرة الذاتية",
      subtitle: "نظرة عامة على مسيرتي المهنية في مجال التعليق الصوتي.",
      aboutTitle: "نبذة عني",
      about: `معلق صوتي ثنائي اللغة (عربي–إنجليزي) بخبرة تزيد عن 7 سنوات على مستوى العالم. 
      أقدّم تسجيلات احترافية عالية الجودة لعلامات تجارية وهيئات حكومية مرموقة. 
      يشمل عملي التعليق على الإعلانات، التعليم الإلكتروني، الألعاب، الرد الآلي، الوثائقيات، والمحتوى المؤسسي. 
      أعمل من استوديو احترافي مزوّد بغرفة Whisper Room لضمان نقاء صوتي ممتاز وسرعة في التسليم.`,
      experienceTitle: "الخبرات العملية",
      experience: [
        {
          role: "معلق صوتي ومستشار إبداعي مستقل",
          company: "عن بُعد – حول العالم",
          date: "نوفمبر 2018 – حتى الآن",
          details:
            "قدّمت أكثر من 2500 مشروع في مجالات الاتصالات، التعليم الإلكتروني، الألعاب، والجهات الحكومية. من أبرز العملاء: طيران الإمارات، هواوي، بيبسيكو، فودافون، وأدنوك.",
        },
        {
          role: "معلق صوتي ومذيع ألعاب – Free Fire (Garena)",
          company: "إندونيسيا / خوادم الشرق الأوسط وشمال إفريقيا",
          date: "أبريل 2020 – فبراير 2023",
          details:
            "المذيع العربي الرسمي لبطولات Free Fire. قدمت تعليقاً صوتياً عربياً لأكثر من 15 بطولة رسمية برعاية هواوي وزين.",
        },
        {
          role: "مدير التسويق والصيانة",
          company: "Golden Life for Mobiles – الأردن",
          date: "أغسطس 2015 – يوليو 2018",
          details:
            "أدرت المبيعات والعلاقات مع العملاء وفرق الصيانة، وطبّقت برامج تسويقية لزيادة ولاء العملاء.",
        },
      ],
      educationTitle: "التعليم",
      education: [
        {
          degree: "بكالوريوس في التسويق",
          institution: "جامعة العلوم التطبيقية – الأردن",
          date: "2008 – 2014",
        },
      ],
      skillsTitle: "المهارات والأدوات",
      skills: [
        "تعليق صوتي بالعربية والإنجليزية",
        "كتابة وترجمة النصوص",
        "الإعلانات – التعليم الإلكتروني – الألعاب – الرد الآلي",
        "برنامج Studio One 5 | كشك Whisper Room",
        "Adobe Audition | مونتاج صوتي احترافي",
        "ميكروفون RODE NT1 | واجهة Focusrite G3 | سماعات DT770 Pro",
      ],
      awardsTitle: "الجوائز والشهادات",
      awards: [
        {
          title: "شهادة احتراف التعليق الصوتي",
          issuer: "أكاديمية فويسز – 2023",
        },
        {
          title: "دبلوم التمثيل الصوتي وإنتاج الصوت",
          issuer: "مدرسة التعليق الصوتي عبر الإنترنت – 2022",
        },
        {
          title: "شهادة التميز في التعليق العربي",
          issuer: "قمة الإعلام العربي – 2021",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <motion.section
      id="cv"
      className={`cv-section ${lang === "ar" ? "rtl" : ""}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h1 className="cv-title" variants={item}>
          {t.title}
        </motion.h1>
        <motion.p className="cv-subtitle" variants={item}>
          {t.subtitle}
        </motion.p>

        <div className="cv-content">
          {/* LEFT COLUMN */}
          <motion.div className="cv-left" variants={container}>
            <motion.div className="cv-card" variants={item}>
              <h2>{t.aboutTitle}</h2>
              <p>{t.about}</p>
            </motion.div>

            <motion.div className="cv-card" variants={item}>
              <h2>{t.experienceTitle}</h2>
              {t.experience.map((exp, i) => (
                <div className="cv-item" key={i}>
                  <h3>
                    {exp.role} — <span>{exp.company}</span>
                  </h3>
                  <p className="cv-date">{exp.date}</p>
                  <p>{exp.details}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <motion.div className="cv-right" variants={container}>
            <motion.div className="cv-card" variants={item}>
              <h2>{t.educationTitle}</h2>
              {t.education.map((edu, i) => (
                <div className="cv-item" key={i}>
                  <h3>{edu.degree}</h3>
                  <p className="cv-date">{edu.date}</p>
                  <p>{edu.institution}</p>
                </div>
              ))}
            </motion.div>

            <motion.div className="cv-card" variants={item}>
              <h2>{t.skillsTitle}</h2>
              <ul className="cv-skills">
                {t.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="cv-card" variants={item}>
              <h2>{t.awardsTitle}</h2>
              <ul className="cv-awards">
                {t.awards.map((award, i) => (
                  <li key={i}>
                    <strong>{award.title}</strong> — {award.issuer}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="cv-download" variants={item}>
          <a
            href="CV.pdf"
            download="Sofian_Shubaq_CV.pdf"
            target="_blank"
            className="btn-download"
          >
            {lang === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CV;
