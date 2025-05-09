import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose, type }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: type === "signup" ? "" : undefined,
  });
  const [errors, setErrors] = useState({});

  // Blochează scroll-ul când modulul este deschis
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.classList.remove("no-scroll");
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Gestionare taste ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      onClose();
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.email) {
      errors.email = t("emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = t("emailInvalid");
    }

    if (!formData.password) {
      errors.password = t("passwordRequired");
    } else if (formData.password.length < 6) {
      errors.password = t("passwordLength");
    }

    if (type === "signup" && !formData.name) {
      errors.name = t("nameRequired");
    }

    return errors;
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
          aria-label={t("closeModal")}
        >
          &times;
        </button>

        <h2>{type === "login" ? t("login") : t("signup")}</h2>

        <form onSubmit={handleSubmit}>
          {type === "signup" && (
            <div className="form-group">
              <label htmlFor="name">{t("name")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name || ""}
                onChange={handleChange}
                className={errors.name ? "error" : ""}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className="error-message">
                  {errors.name}
                </span>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span id="email-error" className="error-message">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">{t("password")}</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
              aria-invalid={!!errors.password}
              aria-describedby={errors.password ? "password-error" : undefined}
            />
            {errors.password && (
              <span id="password-error" className="error-message">
                {errors.password}
              </span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            {type === "login" ? t("login") : t("signup")}
          </button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AuthModal;
