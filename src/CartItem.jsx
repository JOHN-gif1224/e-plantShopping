// ============================================================================
// CARTITEM.JSX - Composant de gestion du panier d'achat
// ============================================================================
// Ce composant affiche tous les articles du panier, permet de modifier
// les quantités et de supprimer des articles

// ============================================================================
// IMPORTS - Dépendances nécessaires au fonctionnement du composant
// ============================================================================

// React - Bibliothèque principale pour créer des composants réactifs
import React from 'react';

// Redux Hooks - Outils pour accéder et modifier l'état global Redux
// - useSelector: récupère des données du store Redux
// - useDispatch: crée des fonctions pour envoyer des actions à Redux
import { useSelector, useDispatch } from 'react-redux';

// Actions Redux - Fonctions qui modifient l'état du panier
// - removeItem: supprime un article du panier
// - updateQuantity: met à jour la quantité d'un article
import { removeItem, updateQuantity } from './CartSlice';

// Styles CSS - Fichier de style associé au composant CartItem
import './CartItem.css';

// ============================================================================
// COMPOSANT CARTITEM
// ============================================================================
// Props reçues:
// - onContinueShopping: callback fonction quand l'utilisateur veut continuer
//   ses achats (redirige vers la liste des produits)

const CartItem = ({ onContinueShopping }) => {
  
  // ========================================================================
  // SÉLECTEURS REDUX - Accès à l'état global du panier
  // ========================================================================
  
  // useSelector(state => state.cart.items)
  // - Récupère la liste des articles du panier depuis le store Redux
  // - Chaque fois que state.cart.items change, le composant se re-rend
  // - Structure attendue de chaque article:
  //   { name: string, image: string, cost: number, quantity: number }
  const cart = useSelector(state => state.cart.items);
  
  // useDispatch() retourne une fonction pour envoyer des actions à Redux
  // - Cette fonction est utilisée pour appeler removeItem() et updateQuantity()
  // - Elle communique avec CartSlice pour modifier l'état global
  const dispatch = useDispatch();

  // ========================================================================
  // FONCTION 1: calculateTotalAmount()
  // ========================================================================
  // Objectif: Calculer le montant total de tous les articles du panier
  // 
  // Logique à implémenter:
  // - Parcourir tous les articles du tableau 'cart'
  // - Pour chaque article: multiplier (cost * quantity)
  // - Additionner tous les totaux
  // - Retourner la somme finale (arrondie à 2 décimales)
  //
  // Exemple: 3 articles
  //   - Article 1: cost=10, quantity=2 → 10 * 2 = 20
  //   - Article 2: cost=15, quantity=1 → 15 * 1 = 15
  //   - Article 3: cost=5, quantity=3 → 5 * 3 = 15
  //   → Retourner: 20 + 15 + 15 = 50
  const calculateTotalAmount = () => {
    // À IMPLÉMENTER: Retourner la somme totale du panier
  };

  // ========================================================================
  // FONCTION 2: handleContinueShopping(e)
  // ========================================================================
  // Objectif: Gérer le clic sur le bouton "Continue Shopping"
  // Paramètre: e = événement du clic (event object)
  //
  // Logique à implémenter:
  // - Appeler la callback 'onContinueShopping' reçue en prop
  // - Cette fonction doit rediriger l'utilisateur vers la page des produits
  // - Fermer le panier ou naviguer vers la liste des produits
  const handleContinueShopping = (e) => {
    // À IMPLÉMENTER: Appeler la fonction callback passée en props
  };

  // ========================================================================
  // FONCTION 3: handleIncrement(item)
  // ========================================================================
  // Objectif: Augmenter la quantité d'un article du panier de +1
  // Paramètre: item = l'article dont on veut augmenter la quantité
  //
  // Logique à implémenter:
  // - Calculer la nouvelle quantité: item.quantity + 1
  // - Appeler dispatch() pour envoyer l'action updateQuantity() à Redux
  // - Passer l'article et la nouvelle quantité à updateQuantity()
  //
  // Exemple: un article avec quantity=3 doit devenir quantity=4
  const handleIncrement = (item) => {
    // À IMPLÉMENTER: Envoyer une action pour augmenter la quantité de 1
  };

  // ========================================================================
  // FONCTION 4: handleDecrement(item)
  // ========================================================================
  // Objectif: Diminuer la quantité d'un article du panier de -1
  // Paramètre: item = l'article dont on veut diminuer la quantité
  //
  // Logique à implémenter:
  // - Calculer la nouvelle quantité: item.quantity - 1
  // - Appeler dispatch() pour envoyer l'action updateQuantity() à Redux
  // - Passer l'article et la nouvelle quantité à updateQuantity()
  // - ATTENTION: Ne pas laisser la quantité descendre en dessous de 1
  //   (ou considérer la suppression si quantity === 1)
  //
  // Exemple: un article avec quantity=3 doit devenir quantity=2
  const handleDecrement = (item) => {
    // À IMPLÉMENTER: Envoyer une action pour diminuer la quantité de 1
    // Ajouter une vérification pour ne pas avoir quantity < 1
  };

  // ========================================================================
  // FONCTION 5: handleRemove(item)
  // ========================================================================
  // Objectif: Supprimer complètement un article du panier
  // Paramètre: item = l'article à supprimer
  //
  // Logique à implémenter:
  // - Appeler dispatch() pour envoyer l'action removeItem() à Redux
  // - Passer l'article à removeItem() pour l'identifier
  // - L'article disparaîtra complètement du panier
  //
  // Exemple: un article 'Plant A' est supprimé du panier
  const handleRemove = (item) => {
    // À IMPLÉMENTER: Envoyer une action pour supprimer l'article du panier
  };

  // ========================================================================
  // FONCTION 6: calculateTotalCost(item)
  // ========================================================================
  // Objectif: Calculer le prix total pour UN article (price * quantity)
  // Paramètre: item = l'article dont on veut calculer le total
  //
  // Logique à implémenter:
  // - Prendre le prix de l'article: item.cost
  // - Multiplier par la quantité: item.quantity
  // - Retourner le résultat (ex: 10 * 3 = 30)
  //
  // Exemple: un article à 10€ avec une quantité de 3 → Retourner 30
  const calculateTotalCost = (item) => {
    // À IMPLÉMENTER: Retourner item.cost * item.quantity
  };

  // ========================================================================
  // JSX - Rendu du composant (HTML+React)
  // ========================================================================
  return (
    <div className="cart-container">
      
      {/* ====================================================================
          AFFICHAGE DU MONTANT TOTAL DU PANIER
          ==================================================================== */}
      {/* Titre avec le montant total calculé par calculateTotalAmount() */}
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      {/* ====================================================================
          BOUCLE .MAP() - Affichage de tous les articles du panier
          ==================================================================== */}
      {/* 
          cart.map(item => (...))
          - Parcourt chaque article du tableau 'cart'
          - Crée un élément JSX pour chaque article
          - 'item' représente l'article actuel dans la boucle
          - Retourne un JSX pour afficher cet article
          
          IMPORTANT:
          - La prop 'key' DOIT être unique pour chaque élément (ici item.name)
          - React l'utilise pour identifier les éléments lors des mises à jour
      */}
      <div>
        {cart.map(item => (
          
          {/* Conteneur d'un article du panier */}
          <div className="cart-item" key={item.name}>
            
            {/* Image du produit */}
            <img 
              className="cart-item-image" 
              src={item.image} 
              alt={item.name} 
            />
            
            {/* Conteneur des détails de l'article */}
            <div className="cart-item-details">
              
              {/* Nom de l'article */}
              <div className="cart-item-name">{item.name}</div>
              
              {/* Prix unitaire de l'article */}
              <div className="cart-item-cost">{item.cost}</div>
              
              {/* =========================================================
                  CONTRÔLES DE QUANTITÉ - Boutons +/- et affichage
                  ========================================================= */}
              <div className="cart-item-quantity">
                
                {/* Bouton pour diminuer la quantité de 1 */}
                {/* onClick: quand l'utilisateur clique, appeler handleDecrement() */}
                <button 
                  className="cart-item-button cart-item-button-dec" 
                  onClick={() => handleDecrement(item)}
                >
                  -
                </button>
                
                {/* Afficher la quantité actuelle de cet article */}
                {/* Exemple: si item.quantity = 3, affiche "3" */}
                <span className="cart-item-quantity-value">{item.quantity}</span>
                
                {/* Bouton pour augmenter la quantité de 1 */}
                {/* onClick: quand l'utilisateur clique, appeler handleIncrement() */}
                <button 
                  className="cart-item-button cart-item-button-inc" 
                  onClick={() => handleIncrement(item)}
                >
                  +
                </button>
              </div>
              
              {/* Montant total pour cet article (prix * quantité) */}
              {/* Exemple: si prix=10 et quantité=3, affiche "Total: $30" */}
              <div className="cart-item-total">
                Total: ${calculateTotalCost(item)}
              </div>
              
              {/* Bouton pour supprimer cet article du panier */}
              {/* onClick: quand l'utilisateur clique, appeler handleRemove() */}
              <button 
                className="cart-item-delete" 
                onClick={() => handleRemove(item)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* ====================================================================
          ZONE DE MONTANT TOTAL (potentiellement pour affichage supplémentaire)
          ==================================================================== */}
      {/* 
          DIV vide avec classe 'total_cart_amount'
          À IMPLÉMENTER: Pourrait afficher un autre total ou des informations
      */}
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      
      {/* ====================================================================
          BOUTONS D'ACTION - Navigation et paiement
          ==================================================================== */}
      <div className="continue_shopping_btn">
        
        {/* 
            Bouton "Continue Shopping"
            - Quand on clique, appelle handleContinueShopping()
            - Cela doit rediriger vers la page des produits
            - L'utilisateur peut ajouter d'autres articles au panier
        */}
        <button 
          className="get-started-button" 
          onClick={(e) => handleContinueShopping(e)}
        >
          Continue Shopping
        </button>
        
        <br />
        
        {/* 
            Bouton "Checkout"
            À IMPLÉMENTER: Ajouter une fonction pour gérer le paiement
            - Actuellement, ce bouton n'a aucune action associée
            - À implémenter: onclick={() => handleCheckout()}
            - Devrait diriger vers la page de paiement
        */}
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

// ============================================================================
// EXPORT - Rendre ce composant disponible pour être utilisé ailleurs
// ============================================================================
// Permet d'importer ce composant dans d'autres fichiers:
// import CartItem from './CartItem';
export default CartItem;

// ============================================================================
// RÉSUMÉ DES TÂCHES À IMPLÉMENTER
// ============================================================================
// 1. calculateTotalAmount() - Calculer la somme de tous les articles
// 2. handleContinueShopping() - Appeler la callback pour retourner au magasinage
// 3. handleIncrement() - Augmenter la quantité d'un article via dispatch
// 4. handleDecrement() - Diminuer la quantité (avec vérification min 1)
// 5. handleRemove() - Supprimer un article via dispatch
// 6. calculateTotalCost() - Multiplier cost * quantity pour un article
// 7. BONUS: handleCheckout() - Implémenter le bouton Checkout (optionnel)
// ============================================================================
