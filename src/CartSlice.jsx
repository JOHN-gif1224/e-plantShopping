// Importation de createSlice de Redux Toolkit
// createSlice simplifie la création d'un slice Redux (états + actions + reducer)
import { createSlice } from "@reduxjs/toolkit";

// Création d'un slice Redux pour gérer l'état du panier
// Un "slice" contient : l'état initial, les reducers, et génère automatiquement les actions
export const CartSlice = createSlice({
  // "name" : identifie ce slice (utilisé pour les noms des actions générées)
  name: "cart",
  // "initialState" : l'état initial du panier au démarrage de l'app
  initialState: {
    // items : tableau qui stockera les produits ajoutés au panier
    // Chaque produit aura : name, image, cost, quantity
    items: [],
  },
  // "reducers" : fonctions qui modifient l'état du panier
  // IMPORTANT : avec Redux Toolkit, on peut modifier l'état directement (pas d'immuabilité manuelle)
  reducers: {
    // Action pour ajouter un produit au panier
    // state : l'état actuel du panier
    // action : objet qui contient les données envoyées (action.payload)
    addItem: (state, action) => {
      // Récupération des propriétés du produit à ajouter
      const { name, image, cost } = action.payload;
      // Recherche si le produit existe déjà dans le panier
      const existingItem = state.items.find((item) => item.name === name);

      // Si le produit existe déjà, augmenter sa quantité
      if (existingItem) {
        existingItem.quantity++;
      }
      // Sinon, ajouter le nouveau produit avec une quantité de 1
      else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    // Action pour supprimer un produit du panier (à implémenter)
    removeItem: (state, action) => {
      // À compléter : trouver et supprimer le produit du tableau
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
    // Action pour mettre à jour la quantité d'un produit (à implémenter)
    updateQuantity: (state, action) => {
      // À compléter : modifier la quantité d'un produit existant
      const { name, quantity } = action.payload; // Destructure the product name and new quantity from the action payload
      // Find the item in the cart that matches the given name
      const itemToUpdate = state.items.find((item) => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // If the item is found, update its quantity to the new value
      }
    },
  },
});

// Exportation automatique des actions générées par createSlice
// Ces actions sont utilisées avec dispatch() pour modifier l'état
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exportation du reducer (la fonction qui gère les modifications d'état)
// C'est ce reducer qui est utilisé dans store.js
export default CartSlice.reducer;
