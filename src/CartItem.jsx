// ============================================================================
// CARTITEM.JSX — Panier d'achat (totaux et gestion des articles)
// ============================================================================
// Fonctions de calcul exportées (utilisables dans les tests ou ailleurs) :
//   - parseCost(cost)           : convertit "$15" ou 15 en nombre
//   - calculateTotalCost(item)  : prix unitaire × quantité pour un article
//   - calculateTotalAmount(items): somme de tous les sous-totaux du panier
//
// Dépôt : https://github.com/JOHN-gif1224/e-plantShopping/blob/main/src/CartItem.jsx
// ============================================================================

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

/** Convertit un prix affiché ("$15") ou numérique en valeur utilisable pour le calcul. */
export const parseCost = (cost) => {
  if (typeof cost === 'number') return cost;
  return parseFloat(String(cost).replace(/[^0-9.]/g, '')) || 0;
};

/**
 * Coût total d'un article : prix unitaire × quantité.
 * @param {{ cost: string|number, quantity: number }} item
 * @returns {string} Montant formaté avec 2 décimales (ex. "30.00")
 */
export const calculateTotalCost = (item) => {
  return (parseCost(item.cost) * item.quantity).toFixed(2);
};

/**
 * Montant total du panier : somme des coûts de chaque ligne.
 * @param {Array<{ cost: string|number, quantity: number }>} items
 * @returns {string} Total formaté avec 2 décimales (ex. "50.00")
 */
export const calculateTotalAmount = (items) => {
  const total = items.reduce(
    (sum, item) => sum + parseFloat(calculateTotalCost(item)),
    0
  );
  return total.toFixed(2);
};

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const cartTotal = calculateTotalAmount(cart);

  const handleContinueShopping = () => {
    if (onContinueShopping) onContinueShopping();
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    alert(`Checkout total: $${cartTotal}`);
  };

  return (
    <div className="cart-container">
      <section className="cart-summary" aria-label="Résumé du panier">
        <h2 className="cart-summary-title">Shopping Cart</h2>
        <p className="cart-summary-total">
          <span className="cart-summary-label">Total Cart Amount:</span>
          <span className="cart-summary-value">${cartTotal}</span>
        </p>
      </section>

      <div className="cart-items-list">
        {cart.length === 0 && (
          <p className="cart-empty-message">Your cart is empty.</p>
        )}

        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img
              className="cart-item-image"
              src={item.image}
              alt={item.name}
            />

            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>

              <div className="cart-item-cost">
                <span className="cart-item-cost-label">Unit price:</span>{' '}
                {item.cost}
              </div>

              <div className="cart-item-quantity">
                <button
                  type="button"
                  className="cart-item-button cart-item-button-dec"
                  onClick={() => handleDecrement(item)}
                  aria-label={`Decrease quantity of ${item.name}`}
                >
                  -
                </button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button
                  type="button"
                  className="cart-item-button cart-item-button-inc"
                  onClick={() => handleIncrement(item)}
                  aria-label={`Increase quantity of ${item.name}`}
                >
                  +
                </button>
              </div>

              <div className="cart-item-total" aria-label={`Line total for ${item.name}`}>
                <span className="cart-item-total-label">Line total:</span>
                <span className="cart-item-total-value">
                  ${calculateTotalCost(item)}
                </span>
              </div>

              <button
                type="button"
                className="cart-item-delete"
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length > 0 && (
        <div className="total_cart_amount" role="status">
          <span className="total_cart_amount-label">Grand total:</span>
          <span className="total_cart_amount-value">${cartTotal}</span>
        </div>
      )}

      <div className="continue_shopping_btn">
        <button
          type="button"
          className="get-started-button"
          onClick={handleContinueShopping}
        >
          Continue Shopping
        </button>
        <br />
        <button
          type="button"
          className="get-started-button1"
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;
