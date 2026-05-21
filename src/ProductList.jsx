/*
 * ==========================================
 * COMPOSANT: ProductList
 * ==========================================
 * Ce composant gère l'affichage de la liste des produits (plantes) 
 * avec les catégories, le panier d'achat et les interactions utilisateur.
 * Il utilise React Hooks (useState) pour gérer l'état local et affiche
 * soit la liste des produits, soit le contenu du panier.
 */

// ========== IMPORTATIONS ==========
// Import de React et du hook useState pour gérer l'état des composants fonctionnels
// useEffect est importé mais peut ne pas être utilisé dans cette version
import React, { useState } from "react";

// Import du fichier CSS contenant les styles personnalisés du composant ProductList
import "./ProductList.css";

// Import du composant CartItem qui affiche les articles individuels du panier
import CartItem from "./CartItem";

// Redux : ajout au panier global et lecture des quantités
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "./CartSlice";

/*
 * ========== FONCTION PRINCIPALE DU COMPOSANT ==========
 * Composant ProductList
 * 
 * @param {Object} props - Les propriétés du composant
 * @param {Function} props.onHomeClick - Fonction callback pour gérer le clic sur le bouton "Home"
 * @returns {JSX.Element} - Le JSX rendant soit la page produits, soit le panier
 */
function ProductList({ onHomeClick }) {
  
  /* ========== GESTION D'ÉTAT LOCAL AVEC USESTATE ========== */
  
  // État pour contrôler l'affichage du panier
  // true = afficher le panier, false = afficher les produits disponibles
  const [showCart, setShowCart] = useState(false);
  
  // État pour contrôler la visibilité d'une page (semble être la page "À propos")
  // À noter: Ce nom "showPlants" est trompeur car les plantes sont toujours affichées dans la liste
  const [showPlants, setShowPlants] = useState(false);
  
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const getCartQuantity = (name) => {
    const item = cartItems.find((i) => i.name === name);
    return item ? item.quantity : 0;
  };

  /*
   * ========== STRUCTURE DE DONNÉES PRINCIPALE ==========
   * plantsArray - Tableau contenant toutes les 5 catégories de plantes
   * 
   * Structure générale:
   * [
   *   {
   *     category: "Nom de la catégorie",
   *     plants: [
   *       { name, image, description, cost },
   *       ...
   *     ]
   *   },
   *   ...
   * ]
   * 
   * Les 5 catégories disponibles:
   * 1. "Air Purifying Plants" - Plantes qui purifient l'air de la maison
   * 2. "Aromatic Fragrant Plants" - Plantes avec un parfum agréable et relaxant
   * 3. "Insect Repellent Plants" - Plantes qui repoussent naturellement les insectes
   * 4. "Medicinal Plants" - Plantes à propriétés médicinales
   * 5. "Low Maintenance Plants" - Plantes faciles à entretenir, idéales pour débutants
   */
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image:
            "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18",
        },
        {
          name: "Boston Fern",
          image:
            "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adds humidity to the air and removes toxins.",
          cost: "$20",
        },
        {
          name: "Rubber Plant",
          image:
            "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Easy to care for and effective at removing toxins.",
          cost: "$17",
        },
        {
          name: "Aloe Vera",
          image:
            "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifies the air and has healing properties for skin.",
          cost: "$14",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image:
            "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Jasmine",
          image:
            "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18",
        },
        {
          name: "Rosemary",
          image:
            "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Invigorating scent, often used in cooking.",
          cost: "$15",
        },
        {
          name: "Mint",
          image:
            "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description: "Refreshing aroma, used in teas and cooking.",
          cost: "$12",
        },
        {
          name: "Lemon Balm",
          image:
            "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description: "Citrusy scent, relieves stress and promotes sleep.",
          cost: "$14",
        },
        {
          name: "Hyacinth",
          image:
            "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          description: "Sweet fragrance that attracts butterflies.",
          cost: "$16",
        },
      ],
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "Neem",
          image:
            "https://cdn.pixabay.com/photo/2021/02/04/21/17/neem-5985800_1280.jpg",
          description: "Natural insect repellent used for centuries.",
          cost: "$21",
        },
        {
          name: "Marigold",
          image:
            "https://cdn.pixabay.com/photo/2019/12/08/12/47/marigold-4680234_1280.jpg",
          description: "Repels insects and brightens the garden.",
          cost: "$8",
        },
        {
          name: "Tulsi",
          image:
            "https://cdn.pixabay.com/photo/2021/04/29/08/30/tulsi-6215503_1280.jpg",
          description: "Sacred plant that repels insects naturally.",
          cost: "$19",
        },
        {
          name: "Citronella",
          image:
            "https://cdn.pixabay.com/photo/2021/07/13/21/09/citronella-6463485_1280.jpg",
          description: "Famous mosquito repellent with citrus scent.",
          cost: "$13",
        },
        {
          name: "Peppermint",
          image:
            "https://cdn.pixabay.com/photo/2019/08/27/05/39/mint-4432014_1280.jpg",
          description: "Pest repellent, useful in culinary applications.",
          cost: "$11",
        },
        {
          name: "Camphor Basil",
          image:
            "https://cdn.pixabay.com/photo/2019/08/27/05/38/basil-4432013_1280.jpg",
          description: "Strong scent that repels various insects.",
          cost: "$10",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Basil",
          image:
            "https://cdn.pixabay.com/photo/2020/02/01/18/52/basil-4807939_1280.jpg",
          description: "Used in cooking and traditional medicine.",
          cost: "$9",
        },
        {
          name: "Thyme",
          image:
            "https://cdn.pixabay.com/photo/2018/07/25/10/22/herb-3560016_1280.jpg",
          description: "Herbal remedy, used in teas and cooking.",
          cost: "$7",
        },
        {
          name: "Sage",
          image:
            "https://cdn.pixabay.com/photo/2019/08/26/08/04/sage-4431139_1280.jpg",
          description: "Traditional medicinal herb with multiple benefits.",
          cost: "$8",
        },
        {
          name: "Oregano",
          image:
            "https://cdn.pixabay.com/photo/2019/08/27/05/37/oregano-4432011_1280.jpg",
          description: "Rich in antioxidants, used in cooking and medicine.",
          cost: "$6",
        },
        {
          name: "Ashwagandha",
          image:
            "https://cdn.pixabay.com/photo/2021/08/04/12/39/ashwagandha-6520421_1280.jpg",
          description: "Ancient ayurvedic herb for stress relief.",
          cost: "$18",
        },
        {
          name: "Brahmi",
          image:
            "https://cdn.pixabay.com/photo/2021/08/04/12/40/brahmi-6520422_1280.jpg",
          description: "Cognitive enhancer used in traditional medicine.",
          cost: "$16",
        },
      ],
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "Pothos",
          image:
            "https://cdn.pixabay.com/photo/2018/07/11/06/50/philodendron-3530420_1280.jpg",
          description: "Thrives in low light and irregular watering.",
          cost: "$11",
        },
        {
          name: "Dracaena",
          image:
            "https://cdn.pixabay.com/photo/2020/03/27/12/11/dracaena-4973177_1280.jpg",
          description: "Hardy plant, tolerates neglect very well.",
          cost: "$13",
        },
        {
          name: "ZZ Plant",
          image:
            "https://cdn.pixabay.com/photo/2021/02/11/09/27/zz-plant-5999815_1280.jpg",
          description: "Extremely tolerant of low light and dry conditions.",
          cost: "$15",
        },
        {
          name: "Succulent",
          image:
            "https://cdn.pixabay.com/photo/2021/04/24/10/47/succulent-6204547_1280.jpg",
          description: "Water-efficient with minimal care requirements.",
          cost: "$10",
        },
        {
          name: "Cactus",
          image:
            "https://cdn.pixabay.com/photo/2021/04/19/14/30/cactus-6191817_1280.jpg",
          description: "Perfect for sunny spots, requires minimal watering.",
          cost: "$9",
        },
        {
          name: "Snake Plant Variegated",
          image:
            "https://cdn.pixabay.com/photo/2020/05/23/16/53/sanseviera-5212251_1280.jpg",
          description: "Highly adaptable to various indoor conditions.",
          cost: "$14",
        },
      ],
    },
  ];

  /*
   * ========== GESTIONNAIRES D'ÉVÉNEMENTS ==========
   * Ces fonctions gèrent les interactions utilisateur
   */

  const handleAddCart = (plant) => {
    dispatch(addItem({ name: plant.name, image: plant.image, cost: plant.cost }));
  };

  // Fonction pour basculer l'affichage du panier
  // Affiche le panier si showCart est false, cache le panier sinon
  // Met à jour également l'état showPlants
  const handleCartClick = () => {
    setShowCart(!showCart);
    setShowPlants(false);
  };

  // Fonction pour revenir à l'accueil
  // Appelle la fonction callback onHomeClick fournie en propriété
  const handleHomeClick = () => {
    onHomeClick();
  };

  /*
   * ========== STYLES EN LIGNE ==========
   * Définition des styles CSS en tant qu'objets JavaScript
   * Ces styles sont appliqués directement aux éléments JSX
   */

  // Styles pour la barre de navigation
  const navbarStyle = {
    backgroundColor: "#4CAF50", // Couleur verte
    color: "white",
    padding: "10px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  // Styles pour les boutons de la navbar
  const navButtonStyle = {
    backgroundColor: "white",
    color: "#4CAF50",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "4px",
    marginRight: "10px",
  };

  // ========== RENDU CONDITIONNEL ==========
  // Si showCart est true, afficher le panier
  // Sinon, afficher la liste des produits avec les catégories

  if (showCart) {
    // RENDU DU PANIER
    return (
      <div>
        {/* Barre de navigation avec bouton pour revenir aux produits */}
        <nav style={navbarStyle}>
          <h1>Shopping Cart</h1>
          <button style={navButtonStyle} onClick={handleCartClick}>
            View Products
          </button>
        </nav>

        <CartItem onContinueShopping={handleCartClick} />
      </div>
    );
  }

  // RENDU DE LA PAGE PRODUITS (affichage par défaut)
  return (
    <div className="products-page">
      {/* Barre de navigation */}
      <nav style={navbarStyle}>
        <h1>Paradise Nursery</h1>
        <div>
          {/* Bouton pour afficher le panier */}
          <button style={navButtonStyle} onClick={handleCartClick}>
            View Cart
          </button>
          {/* Bouton pour revenir à l'accueil */}
          <button style={navButtonStyle} onClick={handleHomeClick}>
            Home
          </button>
        </div>
      </nav>

      {/* Conteneur principal pour toutes les catégories */}
      <div className="plants-container">
        {/* 
         * BOUCLE MAP SUR LES CATÉGORIES
         * Parcourt chaque catégorie dans plantsArray et crée une section pour chacune
         */}
        {plantsArray.map((category) => (
          <div key={category.category} className="category-section">
            {/* En-tête de la catégorie */}
            <h2 className="category-title">{category.category}</h2>

            {/* 
             * BOUCLE MAP SUR LES PLANTES
             * Pour chaque plante dans la catégorie, affiche une carte produit
             */}
            <div className="plants-grid">
              {category.plants.map((plant) => {
                const quantity = getCartQuantity(plant.name);
                const isInCart = quantity > 0;

                return (
                  <article key={plant.name} className="plant-card">
                    <div className="plant-card-image-wrap">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="plant-image"
                        loading="lazy"
                      />
                    </div>
                    <div className="plant-card-body">
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-description">{plant.description}</p>
                      <p className="plant-cost">{plant.cost}</p>
                      <button
                        type="button"
                        className={`add-to-cart-button${isInCart ? " added-to-cart" : ""}`}
                        onClick={() => handleAddCart(plant)}
                        disabled={isInCart}
                        aria-disabled={isInCart}
                      >
                        {isInCart ? "Added to Cart" : "Add to Cart"}
                      </button>
                      {isInCart && (
                        <p className="quantity-badge">
                          Quantity: {quantity}
                        </p>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Export du composant pour utilisation dans d'autres fichiers
export default ProductList;
