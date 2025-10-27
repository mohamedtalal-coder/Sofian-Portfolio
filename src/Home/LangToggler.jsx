import React from "react";
// Make sure this path points to your LanguageContext file
import { useLanguage } from "./LanguageContext";
import "./LangToggler.css";
const LangToggler = () => {
  const { lang, toggleLang } = useLanguage();

  return (
    // We add a class for styling
    <button onClick={toggleLang} className="lang-toggle-btn">
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LangToggler;
