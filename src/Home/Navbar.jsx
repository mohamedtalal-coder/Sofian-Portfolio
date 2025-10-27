import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useLanguage } from "./LanguageContext";

// 3. Create an object for your translations
const navContent = {
  en: {
    home: "Home",
    gallery: "Gallery",
    customers: "Featured Customers",
    cv: "CV",
    reviews: "Reviews",
    contact: "Contact Us",
  },
  ar: {
    home: "الرئيسية",
    gallery: "المعرض",
    customers: "عملاء مميزون",
    cv: "السيرة الذاتية",
    reviews: "التقييمات",
    contact: "اتصل بنا",
  },
};

const Navbar = () => {
  // 4. Get the current language from the context
  const { lang } = useLanguage();

  return (
    <nav className="navbar fixed-top">
      <div className="nav-pill">
        <div className="nav-links">
          {/* 5. Update all links to use the content object */}
          <Link
            to="home"
            spy
            smooth
            offset={-70}
            duration={500}
            activeClass="active"
          >
            {navContent[lang].home}
          </Link>
          <Link
            to="gallery"
            spy
            smooth
            offset={-70}
            duration={500}
            activeClass="active"
          >
            {navContent[lang].gallery}
          </Link>
          <Link
            to="customers"
            spy
            smooth
            offset={-70}
            duration={500}
            activeClass="active"
          >
            {navContent[lang].customers}
          </Link>
          <Link
            to="cv"
            spy
            smooth
            offset={-70}
            duration={500}
            activeClass="active"
          >
            {navContent[lang].cv}
          </Link>
          <Link
            to="reviews"
            spy
            smooth
            offset={-70}
            duration={500}
            activeClass="active"
          >
            {navContent[lang].reviews}
          </Link>
          <Link
            to="contact"
            spy
            smooth
            offset={-70}
            duration={500}
            activeClass="active"
          >
            {navContent[lang].contact}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
