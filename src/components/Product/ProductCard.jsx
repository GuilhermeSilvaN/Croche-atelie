import { useState } from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <div className="product-card">

      <div className="image-container">
        <img src={product.image} alt={product.name} />

        <span
          className={`status ${
            product.status === "Disponível"
              ? "available"
              : "order"
          }`}
        >
          {product.status}
        </span>
      </div>

      <div className="product-content">

        <div className="title-row">
          <h2>{product.name}</h2>

          <span className="category">
            {product.category}
          </span>
        </div>

        <button
          className="details-button"
          onClick={() => setOpenDetails(!openDetails)}
        >
          {openDetails ? "Ver Menos" : "Ver Detalhes"}

          <span>
            {openDetails ? "⌃" : "⌄"}
          </span>
        </button>

        {openDetails && (
          <div className="details-content">
            <p>{product.description}</p>

            <a
              href={product.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="buy-button"
            >
              🛒 Comprar pelo WhatsApp
            </a>
          </div>
        )}

      </div>
    </div>
  );
}