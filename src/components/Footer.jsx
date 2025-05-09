import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo.png" alt="Equine Elegance Logo" />
          <p>{t("copyright")}</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">{t("home")}</a>
            </li>
            <li>
              <a href="/gallery">{t("gallery")}</a>
            </li>
            <li>
              <a href="/about">{t("about")}</a>
            </li>
            <li>
              <a href="/shop">{t("shop")}</a>
            </li>
            <li>
              <a href="/contact">{t("contact")}</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <p>valentinborsanph@gmail.com</p>
          <p>+393533678874</p>
          <div className="social-icons">
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              Instagram
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              Facebook
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
            >
              Pinterest
            </motion.a>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe for updates and new artwork</p>
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
