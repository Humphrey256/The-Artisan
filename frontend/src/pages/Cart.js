import React from 'react';
import { useCart } from './CartContext'; // Assuming you have a CartContext

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePay = () => {
    alert('Proceeding to payment!'); // Replace with actual payment logic
    clearCart(); // Clear cart after payment
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img 
                src={item.image} 
                alt={item.title} 
                className="cart-item-image" 
              />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>${item.price.toFixed(2)}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="delete-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            <button onClick={handlePay} className="pay-button">
              Proceed to Pay
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;