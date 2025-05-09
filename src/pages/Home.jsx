import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t("welcome")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t("heroText")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/gallery" className="cta-button">
              {t("ctaButton")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <div className="about-text">
            <h2>{t("aboutTitle")}</h2>
            <p>{t("aboutText")}</p>
            <Link to="/about" className="about-link">
              Learn more about me
            </Link>
          </div>
          <div className="about-image">
            <img src="/images/about.jpg" alt="Artist at work" />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <h2>{t("contactTitle")}</h2>
        <p>{t("contactSubtitle")}</p>
        <Link to="/contact" className="contact-button">
          {t("contactButton")}
        </Link>
      </section>
    </div>
  );
};

export default Home;
