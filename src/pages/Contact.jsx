import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const contactInformation = {
    email: "artist@equineelegance.com",
    phone: "+1 (555) 123-4567",
    address: "123 Artisan Lane, Creative Valley, CV 12345",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="contact-page page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="contact-hero hero-section">
        <div className="hero-content content-wrapper">
          <h1 className="title main-title">{t("contactTitle")}</h1>
          <p className="subtitle hero-subtitle">{t("contactSubtitle")}</p>
        </div>
      </section>

      <section className="contact-section section-wrapper">
        <div className="container grid-container">
          <div className="contact-content two-column-layout">
            <div className="contact-info info-card">
              <h2 className="section-heading info-heading">
                {t("contactInfoTitle")}
              </h2>
              <div className="info-item contact-detail">
                <h3 className="info-title detail-label">Email</h3>
                <p className="text-body detail-text">
                  {contactInformation.email}
                </p>
              </div>
              <div className="info-item contact-detail">
                <h3 className="info-title detail-label">{t("phone")}</h3>
                <p className="text-body detail-text">
                  {contactInformation.phone}
                </p>
              </div>
              <div className="info-item contact-detail">
                <h3 className="info-title detail-label">{t("address")}</h3>
                <p className="text-body detail-text">
                  {contactInformation.address}
                </p>
              </div>
            </div>

            <div className="contact-form form-card">
              <h2 className="section-heading form-heading">
                {t("sendMessageTitle")}
              </h2>
              {formSubmitted ? (
                <div className="success-message message-alert">
                  <p className="text-body success-text">
                    {t("formSuccessMessage")}
                  </p>
                  <button
                    className="send-another secondary-button"
                    onClick={() => setFormSubmitted(false)}
                  >
                    {t("sendAnother")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group input-group">
                    <label htmlFor="name" className="form-label input-label">
                      {t("name")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input text-input"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group input-group">
                    <label htmlFor="email" className="form-label input-label">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input text-input"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group input-group">
                    <label htmlFor="message" className="form-label input-label">
                      {t("message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="form-textarea"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn primary-button">
                    {t("send")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
