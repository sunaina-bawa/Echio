import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  setCartItems,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) => {
  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <p className="item-title">{item.title}</p>
                <img src={item.image} alt="" className="item-image" />
                <p className="item-quantity">Quantity: {item.quantity}</p>
                <p className="item-price">
                  Price: ${item.price * item.quantity}
                </p>
              </div>
              <div>
                <button
                  onClick={() => handleIncreaseQuantity(item.id)}
                  className="quantity-button"
                >
                  +
                </button>
                <button
                  onClick={() => handleDecreaseQuantity(item.id)}
                  className="quantity-button"
                >
                  -
                </button>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
