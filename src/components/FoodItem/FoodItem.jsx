import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// import "./FoodItem.css";
import "./Fooditem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/food/${id}`);
  };

  return (
    <div className="food-item" onClick={handleItemClick}>
      <div className="food-item-img-container">
        <img
          className="food-item-img"
          src={image}
          alt={name}
          onClick={() => addToCart(id)}
        />
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price"> &#8377; {price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
