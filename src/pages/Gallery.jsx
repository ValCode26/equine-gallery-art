import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import GalleryCarousel from "../components/GalleryCarousel";
import "./Gallery.css";

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="gallery-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="gallery-hero">
        <div className="hero-content">
          <h1>Gallery</h1>
          <p>
            Explore my collection of equine art spanning different styles and
            periods
          </p>
        </div>
      </section>

      <section className="carousel-section">
        <div className="container">
          <GalleryCarousel />
        </div>
      </section>

      <section className="gallery-grid-section">
        <div className="container">
          <h2>Browse Collections</h2>
          <div className="collection-tabs">
            <button className="tab active">All Works</button>
            <button className="tab">Portraits</button>
            <button className="tab">Landscapes</button>
            <button className="tab">Abstract</button>
            <button className="tab">Commissions</button>
          </div>

          <div className="gallery-grid">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                className="gallery-item"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`/images/gallery${item}.jpg`}
                  alt={`Artwork ${item}`}
                />
                <div className="item-info">
                  <h3>Artwork Title {item}</h3>
                  <p>Medium • Year</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Gallery;
