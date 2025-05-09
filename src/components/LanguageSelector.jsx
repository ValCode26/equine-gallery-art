// src/components/LanguageSelector.jsx
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LanguageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState({
    code: "en",
    name: "English",
    flag: "🇬🇧",
  });

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "ro", name: "Română", flag: "🇷🇴" },
    { code: "it", name: "Italiano", flag: "🇮🇹" },
  ];

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLanguage") || "en";
    const lang = languages.find((l) => l.code === savedLang) || languages[0];
    setCurrentLanguage(lang);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const selectedLang = languages.find((l) => l.code === lng) || languages[0];
    setCurrentLanguage(selectedLang);
    setIsOpen(false);
    localStorage.setItem("selectedLanguage", lng);
  };

  return (
    <div className="language-selector">
      <motion.button
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="language-name">{currentLanguage.name}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>▼</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="language-dropdown"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((language) => (
              <motion.button
                key={language.code}
                className={`language-option ${
                  i18n.language === language.code ? "active" : ""
                }`}
                onClick={() => changeLanguage(language.code)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="flag">{language.flag}</span>
                <span className="language-name">{language.name}</span>
                {i18n.language === language.code && (
                  <span className="check-mark">✓</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;
