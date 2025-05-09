import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./Shop.css";

const Shop = () => {
  const { t } = useTranslation();
  const [cart, setCart] = useState([]);
  const [sortOption, setSortOption] = useState("default");

  const artworks = [
    {
      id: 1,
      title: "Majestic Stallion",
      price: 450,
      image: "/images/shop1.jpg",
      category: "original",
    },
    {
      id: 2,
      title: "Running Free",
      price: 380,
      image: "/images/shop2.jpg",
      category: "original",
    },
    {
      id: 3,
      title: "Golden Morning",
      price: 220,
      image: "/images/shop3.jpg",
      category: "print",
    },
    {
      id: 4,
      title: "Dancing Shadows",
      price: 420,
      image: "/images/shop4.jpg",
      category: "original",
    },
    {
      id: 5,
      title: "Portrait of Grace",
      price: 180,
      image: "/images/shop5.jpg",
      category: "print",
    },
    {
      id: 6,
      title: "Wild Spirit",
      price: 500,
      image: "/images/shop6.jpg",
      category: "original",
    },
  ];

  // Sorting function
  const sortedArtworks = [...artworks].sort((a, b) => {
    switch (sortOption) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "original":
        return a.category === "original" ? -1 : 1;
      case "print":
        return a.category === "print" ? -1 : 1;
      default:
        return 0;
    }
  });

  const addToCart = (artwork) => {
    setCart([...cart, artwork]);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <motion.div
      className="shop-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="shop-hero">
        <div className="hero-content">
          <h1>{t("shopTitle")}</h1>
          <p>
            Original paintings and high-quality prints available for purchase
          </p>
        </div>
      </section>

      <section className="shop-section">
        <div className="container">
          <div className="shop-filters">
            <div className="filter-group">
              <label>Sort by:</label>
              <select value={sortOption} onChange={handleSortChange}>
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="original">Originals First</option>
                <option value="print">Prints First</option>
              </select>
            </div>
          </div>

          <div className="artwork-grid">
            {sortedArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                className="artwork-card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="artwork-image">
                  <img src={artwork.image} alt={artwork.title} />
                  <div className="artwork-overlay">
                    <button
                      className="add-to-cart"
                      onClick={() => addToCart(artwork)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="artwork-info">
                  <h3>{artwork.title}</h3>
                  <p className="price">${artwork.price.toFixed(2)}</p>
                  <p className="category">
                    {artwork.category === "original"
                      ? "Original Painting"
                      : "Limited Edition Print"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {cart.length > 0 && (
        <div className="cart-indicator">{cart.length} items in cart</div>
      )}
    </motion.div>
  );
};

export default Shop;
