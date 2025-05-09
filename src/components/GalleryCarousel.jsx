import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./GalleryCarousel.css";

const GalleryCarousel = ({ images, autoPlay = true, showDots = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    pauseAutoPlay();
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50) nextSlide(); // Swipe left
    if (difference < -50) prevSlide(); // Swipe right

    touchStartX.current = null;
    touchEndX.current = null;
    resumeAutoPlay();
  };

  // Navigation functions
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      images && images.length > 0
        ? prev === images.length - 1
          ? 0
          : prev + 1
        : 0
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      images && images.length > 0
        ? prev === 0
          ? images.length - 1
          : prev - 1
        : 0
    );
  };

  // Auto-play control
  const pauseAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeAutoPlay = () => {
    if (autoPlay && !intervalRef.current) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
  };

  // Initialize auto-play
  useEffect(() => {
    if (autoPlay && images && images.length > 1) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoPlay, images]);

  return (
    <div
      className="carousel-container"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.isArray(images) &&
          images.map((img) => (
            <div key={img.id} className="carousel-slide">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="carousel-image"
              />
              {img.caption && (
                <div className="carousel-caption">
                  <h3>{img.title}</h3>
                  <p>{img.caption}</p>
                </div>
              )}
            </div>
          ))}
      </div>

      {showDots && Array.isArray(images) && images.length > 1 && (
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => {
                setCurrentIndex(index);
                pauseAutoPlay();
                resumeAutoPlay();
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Prop types
GalleryCarousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      title: PropTypes.string,
      caption: PropTypes.string,
    })
  ),
  autoPlay: PropTypes.bool,
  showDots: PropTypes.bool,
};

// Default props to prevent crashes
GalleryCarousel.defaultProps = {
  images: [],
  autoPlay: true,
  showDots: true,
};

export default GalleryCarousel;
