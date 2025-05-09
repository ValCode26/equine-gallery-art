import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import AuthModal from "./AuthModal";
import "./Navbar.css";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login");

  // Blocare scroll când meniul mobile este deschis
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const openAuthModal = (type) => {
    setAuthType(type);
    setIsAuthModalOpen(true);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { path: "/", name: t("home") },
    { path: "/gallery", name: t("gallery") },
    { path: "/about", name: t("about") },
    { path: "/shop", name: t("shop") },
    { path: "/contact", name: t("contact") },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src="/images/logo.png" alt="Equine Elegance Logo" />
        </Link>

        {/* Bara de navigație principală - vizibilă pe desktop */}
        <div className="desktop-nav">
          <div className="nav-links">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={link.path} className="nav-link">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Container pentru elementele din dreapta */}
        <div className="right-elements">
          <div className="auth-buttons">
            <motion.button
              className="login-btn"
              onClick={() => openAuthModal("login")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("login")}
            </motion.button>
            <motion.button
              className="signup-btn"
              onClick={() => openAuthModal("signup")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("signup")}
            </motion.button>
          </div>
          <LanguageSelector />
        </div>

        {/* Buton hamburger - vizibil doar pe mobile */}
        <button
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Închide meniul" : "Deschide meniul"}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      {/* Meniul mobil - vizibil doar pe ecrane mici */}
      <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <motion.div
            key={link.path}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className="mobile-nav-link"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        type={authType}
      />
    </nav>
  );
};

export default Navbar;
