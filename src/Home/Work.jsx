import React from "react";
import "./Work.css";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const content = {
  en: {
    title: "My Recent Work",
    subtitle:
      "A few highlights from projects I’ve crafted with care and creativity.",
    cards: [
      {
        title: "UAE Cybersecurity Council – Arabic Voiceover Project",
        description:
          "Arabic voiceover for a national cybersecurity awareness campaign promoting digital safety across the UAE.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7331158964216176641?compact=1",
        buttonText: "View Project",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7331158964216176641?compact=1",
      },
      {
        title: "Qatar University – International Congress Voiceover Project",
        description:
          "Arabic voiceover and bilingual script for the Third International Congress for Engineering and Technology, showcased during the event’s opening ceremony.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7332983999574810624?compact=1",
        buttonText: "View Project",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7332983999574810624?compact=1",
      },
      {
        title: "Ministry of Justice, Qatar – QDI App Voiceover",
        description:
          "Arabic voiceover for an instructional video guiding users through QDI app transactions, enhancing clarity and accessibility in digital legal services.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7338030305280200704?compact=1",
        buttonText: "view Project",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7338030305280200704?compact=1",
      },
      {
        title: "Delta Force Game – Arabic Voice of the Commander",
        description:
          "Arabic voiceover for the Commander character in Delta Force, guiding players through missions and strategies. Recorded across multiple sessions in Jakarta and Dubai for this globally successful title.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7383826945546846208?compact=1",
        buttonText: "View Project",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7383826945546846208?compact=1",
      },
      {
        title: "Harvard University – Arabic E-Learning Voiceover",
        description:
          "Recorded a Modern Standard Arabic E-Learning project for Harvard University’s School of Public Health — three units totaling over 8,700 words, designed to support Arabic learners in public health education.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7372461376830627840?compact=1",
        buttonText: "View Project",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7372461376830627840?compact=1",
      },
      {
        title: "English Accent Voiceover Demos – American & Arab English",
        description:
          "Showcasing versatility in both American and Arab English accents, these demos demonstrate my ability to adapt tone and delivery to suit different projects and audiences.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7348892976242118656?compact=1",
        buttonText: "view Project",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7348892976242118656?compact=1",
      },
    ],
  },
  ar: {
    title: "أعمالي الأخيرة",
    subtitle: "مقتطفات من المشاريع التي قمت بتسجيلها بحرص وإبداع.",
    cards: [
      {
        title: "مجلس الأمن السيبراني الإماراتي – مشروع تعليق صوتي",
        description:
          "تعليق صوتي باللغة العربية لحملة توعية وطنية بالأمن السيبراني في دولة الإمارات.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7331158964216176641?compact=1",
        buttonText: "شاهد المشروع",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7331158964216176641?compact=1",
      },
      {
        title:
          "جامعة قطر – مشروع التعليق الصوتي للمؤتمر الدولي الثالث للهندسة والتكنولوجيا",
        description:
          "تعليق صوتي عربي وكتابة نص ثنائي اللغة للمؤتمر الدولي الثالث للهندسة والتكنولوجيا، عُرض خلال حفل الافتتاح.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7332983999574810624?compact=1",
        buttonText: "شاهد المشروع",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7332983999574810624?compact=1",
      },
      {
        title: "وزارة العدل – قطر | تعليق صوتي لتطبيق",
        description:
          "تعليق صوتي باللغة العربية لفيديو إرشادي يوضح خطوات استخدام تطبيق QDI، بهدف تعزيز وضوح الخدمات القانونية الرقمية وسهولة الوصول إليها.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7338030305280200704?compact=1",
        buttonText: "شاهد المشروع",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7338030305280200704?compact=1",
      },
      {
        title: "لعبة Delta Force – الصوت العربي للقائد",
        description:
          "تعليق صوتي عربي لشخصية القائد في لعبة Delta Force، لتوجيه اللاعبين أثناء المهام والاستراتيجيات. تم التسجيل عبر جلسات متعددة في جاكرتا ودبي لهذا العمل العالمي الناجح.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7383826945546846208?compact=1",
        buttonText: "شاهد المشروع",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7383826945546846208?compact=1",
      },
      {
        title: "جامعة هارفارد – تعليق صوتي عربي للتعليم الإلكتروني",
        description:
          "تسجيل مشروع تعليم إلكتروني باللغة العربية الفصحى لمدرسة الصحة العامة في جامعة هارفارد، يتضمن ثلاث وحدات بأكثر من ٨٬٧٠٠ كلمة لدعم تعلم الصحة العامة باللغة العربية.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7372461376830627840?compact=1",
        buttonText: "شاهد المشروع",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7372461376830627840?compact=1",
      },
      {
        title: "عينات تعليق صوتي بالإنجليزية – اللهجة الأمريكية والعربية",
        description:
          "عرض لقدرتي على التكيّف مع مختلف اللهجات الإنجليزية، من الأمريكية إلى العربية، لتقديم أداء يناسب تنوع المشاريع والجمهور.",
        videoUrl:
          "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7348892976242118656?compact=1",
        buttonText: "شاهد المشروع",
        buttonUrl:
          "https://www.linkedin.com/feed/update/urn:li:ugcPost:7348892976242118656?compact=1",
      },
    ],
  },
};

function Work() {
  const { lang } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section id="gallery" className="container py-5">
      <div className="row justify-content-center">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h1>{content[lang].title}</h1>
          <p className="subtitle">{content[lang].subtitle}</p>
        </motion.div>

        <motion.div
          className="row justify-content-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {content[lang].cards.map((card, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6 col-6 mb-4"
              variants={item}
            >
              <Card className="work-card">
                <iframe
                  src={card.videoUrl}
                  title={card.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <CardBody>
                  <CardTitle tag="h5">{card.title}</CardTitle>
                  <CardText>{card.description}</CardText>
                  <a href={card.buttonUrl} target="_blank" rel="noreferrer">
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
