// Importation de la fonction configureStore de Redux Toolkit
// Redux Toolkit simplifie la configuration de Redux avec les bonnes pratiques intégrées
import { configureStore } from "@reduxjs/toolkit";
// Importation du reducer du panier depuis CartSlice
import cartReducer from "./CartSlice";

// Configuration du store Redux
// Un store est l'endroit où toute l'état global de l'application est stocké
const store = configureStore({
  // "reducer" contient tous les reducers de l'application
  // Chaque clé représente une partie de l'état global
  reducer: {
    // "cart: cartReducer" signifie que state.cart contient l'état du panier
    // Géré par le reducer cartReducer (créé dans CartSlice.jsx)
    cart: cartReducer,
  },
});

// Exportation du store pour être utilisé dans main.jsx
export default store;
