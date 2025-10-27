import React from "react";
import "./Work.css";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext"; // 1. Import the hook

// 2. Create content for both languages
const content = {
  en: {
    title: "My Recent Work",
    subtitle:
      "A few highlights from projects I’ve crafted with care and creativity.",
    cards: [
      {
        title: "Commercial Demo",
        description:
          "A dynamic commercial voiceover for a leading tech brand, showcasing an energetic and persuasive tone.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video
        buttonText: "View Project",
      },
      {
        title: "IVR & Telephony",
        description:
          "Professional and clear IVR system recordings for a multinational bank, ensuring a smooth user experience.",
        videoUrl: "https://www.youtube.com/embed/2CMoyNf4_1M", // Replace with your video
        buttonText: "Listen Now",
      },
      {
        title: "E-Learning Module",
        description:
          "Engaging and educational narration for an online course on digital marketing, recorded in formal Arabic.",
        videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw", // Replace with your video
        buttonText: "Learn More",
      },
      {
        title: "Documentary Narration",
        description:
          "Warm and authoritative narration for a nature documentary, bringing the story to life.",
        videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso", // Replace with your video
        buttonText: "Watch Clip",
      },
      {
        title: "Video Game Character",
        description:
          "Character voice acting for an action-adventure game, providing a rugged and heroic voice.",
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0", // Replace with your video
        buttonText: "See in Game",
      },
      {
        title: "Corporate Video",
        description:
          "Confident and trustworthy voiceover for a corporate promotional video, in a clear English accent.",
        videoUrl: "https://www.youtube.com/embed/6-x1gS8q0g0", // Replace with your video
        buttonText: "View Demo",
      },
    ],
  },
  ar: {
    title: "أعمالي الأخيرة",
    subtitle: "مقتطفات من المشاريع التي قمت بتسجيلها بحرص وإبداع.",
    cards: [
      {
        title: "إعلان تجاري",
        description:
          "تعليق صوتي إعلاني ديناميكي لعلامة تجارية رائدة في مجال التكنولوجيا، يبرز نبرة حماسية ومقنعة.",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with your video
        buttonText: "شاهد المشروع",
      },
      {
        title: "رد آلي (IVR)",
        description:
          "تسجيلات نظام رد آلي واضحة واحترافية لبنك متعدد الجنسيات، لضمان تجربة مستخدم سلسة.",
        videoUrl: "https://www.youtube.com/embed/2CMoyNf4_1M", // Replace with your video
        buttonText: "استمع الآن",
      },
      {
        title: "وحدة تعليم إلكتروني",
        description:
          "سرد تعليمي وجذاب لدورة تدريبية عبر الإنترنت حول التسويق الرقمي، مسجلة باللغة العربية الفصحى.",
        videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw", // Replace with your video
        buttonText: "اعرف المزيد",
      },
      {
        title: "سرد وثائقي",
        description:
          "سرد دافئ وموثوق لفيلم وثائقي عن الطبيعة، يضفي الحيوية على القصة.",
        videoUrl: "https://www.youtube.com/embed/L_LUpnjgPso", // Replace with your video
        buttonText: "شاهد المقطع",
      },
      {
        title: "شخصية لعبة فيديو",
        description:
          "تمثيل صوتي لشخصية في لعبة مغامرات، بصوت قوي وبطولي.",
        videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0", // Replace with your video
        buttonText: "شاهد باللعبة",
      },
      {
        title: "فيديو مؤسسي",
        description:
          "تعليق صوتي واثق وجدير بالثقة لفيديو ترويجي لشركة، بلكنة إنجليزية واضحة.",
        videoUrl: "https://www.youtube.com/embed/6-x1gS8q0g0", // Replace with your video
        buttonText: "شاهد العينة",
      },
    ],
  },
};

function Work() {
  const { lang } = useLanguage(); // 3. Get current language

  // Framer Motion animation settings
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }, // Stagger slightly faster
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="gallery" className="container py-5">
      <div className="row justify-content-center">
        <div className="text-center mb-5">
          {/* 4. Use dynamic content */}
          <h1>{content[lang].title}</h1>
          <p className="subtitle">{content[lang].subtitle}</p>
        </div>

        {/* 5. Use Bootstrap row for responsive grid */}
        <motion.div
          className="row justify-content-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* 6. Map over the 6 cards */}
          {content[lang].cards.map((card, index) => (
            <motion.div
              key={index}
              // 7. These classes create the responsive grid
              className="col-lg-4 col-md-6 col-6 mb-4"
              variants={item}
            >
              <Card className="work-card">
                {/* Iframe is now responsive via CSS */}
                <iframe
                  src={card.videoUrl}
                  title={card.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <CardBody>
                  <CardTitle tag="h5">{card.title}</CardTitle>
                  <CardText>{card.description}</CardText>
                  <a href="#" target="_blank" rel="noreferrer">
                    <Button className="btn btn-block">{card.buttonText}</Button>
                  </a>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Work;

