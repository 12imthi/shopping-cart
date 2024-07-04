// ItemCard.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ItemCard({ item, addToCart, removeFromCart, isInCart }) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i < rating ? "text-warning" : "text-muted"}
        />
      );
    }
    return stars;
  };

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={item.img} alt={item.itemName} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{item.itemName}</h5>
            <div className="d-flex justify-content-center small text-warning mb-2">
              {renderStars(item.rating)}
            </div>
            {/* <p className="card-text">{item.description}</p> */}
            <h6 className="card-title">{item.price}</h6>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {isInCart(item) ? (
              <button className="btn btn-outline-danger mt-auto" onClick={() => removeFromCart(item)}>
                Remove from Cart
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
