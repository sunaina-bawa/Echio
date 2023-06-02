import React from "react";

export default function Cart({ cartItems }) {
  return (
    <div
      style={{
        background: "white",
        width: "30%",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.24)",
      }}
    >
      <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
