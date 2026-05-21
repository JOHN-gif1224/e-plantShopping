// Importations nécessaires
// React : bibliothèque principale pour construire l'interface utilisateur
import React, { useState } from "react";
// Composant pour afficher la liste des produits
import ProductList from "./ProductList";
// Styles CSS de ce composant
import "./App.css";
// Composant pour afficher la section À propos
import AboutUs from "./AboutUs";

// Composant principal (racine) de l'application
// Les composants React sont des fonctions qui retournent du JSX
function App() {
  // Hook useState : crée un état local du composant
  // showProductList : variable d'état (false = afficher la page d'accueil)
  // setShowProductList : fonction pour mettre à jour cet état
  // Quand l'état change, React re-rend automatiquement le composant
  const [showProductList, setShowProductList] = useState(false);

  // Fonction appelée au clic sur "Get Started"
  // Elle met à jour l'état pour afficher la liste des produits
  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // Fonction appelée au clic sur "Home"
  // Elle remet à false pour afficher la page d'accueil
  const handleHomeClick = () => {
    setShowProductList(false);
  };

  // Le composant retourne du JSX (syntaxe HTML-like en JavaScript)
  // JSX se compile en appels React.createElement()
  return (
    <div className="app-container">
      {/* Page d'accueil (landing page) - visible si showProductList = false */}
      <div className={`landing-page ${showProductList ? "fade-out" : ""}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            {/* Bouton qui déclenche handleGetStartedClick quand on clique dessus */}
            <button
              className="get-started-button"
              onClick={handleGetStartedClick}
            >
              Get Started
            </button>
          </div>
          {/* Composant AboutUs : section À propos intégrée dans la landing page */}
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      {/* Page des produits - visible si showProductList = true */}
      {/* On passe handleHomeClick en prop au composant ProductList */}
      {/* Les props permettent de passer des données/fonctions aux composants enfants */}
      <div
        className={`product-list-container ${showProductList ? "visible" : ""}`}
      >
        <ProductList onHomeClick={handleHomeClick} />
      </div>
    </div>
  );
}

// Exportation du composant pour l'utiliser dans d'autres fichiers
export default App;
