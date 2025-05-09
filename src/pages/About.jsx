import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="about-page page-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="about-hero hero-section">
        <div className="hero-content content-container">
          <h1 className="page-title">{t("aboutTitle")}</h1>
          <p className="page-subtitle">{t("aboutText")}</p>
        </div>
      </section>

      {/* Artist Details Section */}
      <section className="artist-details section-container">
        <div className="container grid-layout">
          <div className="detail-card card-style">
            <h3 className="detail-title">{t("journeyTitle")}</h3>
            <p className="detail-text">{t("journeyText")}</p>
          </div>

          <div className="detail-card card-style">
            <h3 className="detail-title">{t("techniquesTitle")}</h3>
            <p className="detail-text">{t("techniquesText")}</p>
          </div>

          <div className="detail-card card-style">
            <h3 className="detail-title">{t("philosophyTitle")}</h3>
            <p className="detail-text">{t("philosophyText")}</p>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="studio-section section-container alt-bg">
        <div className="studio-content two-column-layout">
          <div className="studio-text text-content">
            <h2 className="section-title">{t("studioTitle")}</h2>
            <p className="section-description">{t("studioText")}</p>
          </div>
          <div className="studio-image image-wrapper">
            <img
              src="/images/studio.jpg"
              alt="Artist's studio"
              className="responsive-image"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
