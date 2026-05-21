// Importation de React et des dépendances principales
import React from "react";
// ReactDOM permet de rendre les composants React dans le DOM
import ReactDOM from "react-dom/client";
// Importation du composant App (racine de l'application)
import App from "./App.jsx";
// Styles CSS globaux
import "./index.css";
// Provider de Redux pour rendre le store accessible à toute l'application
import { Provider } from "react-redux";
// Store Redux qui contient l'état global de l'application
import store from "./store.js";

// Point d'entrée de l'application React
// createRoot crée un point d'entrée React dans le DOM (l'élément avec id="root")
ReactDOM.createRoot(document.getElementById("root")).render(
  // StrictMode met en évidence les problèmes potentiels de l'application en mode développement
  <React.StrictMode>
    {/* Provider rend le store Redux accessible à TOUS les composants enfants */}
    {/* Cela permet à n'importe quel composant d'accéder à l'état global avec useSelector et useDispatch */}
    <Provider store={store}>
      {/* Composant racine de l'application */}
      <App />
    </Provider>
  </React.StrictMode>,
);
