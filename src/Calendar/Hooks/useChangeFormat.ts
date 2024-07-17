import React, { ChangeEvent, useState } from 'react';

// Hook personnalisé pour gérer le changement de format d'affichage (par exemple, mensuel, hebdomadaire)
export const useChangeFormat = () => {
  // Déclare un état local pour suivre le composant actif (par défaut, il est 'monthly')
  const [activeComponent, setActiveComponent] = useState<string>("monthly");

  // Gestionnaire d'événements pour changer le composant actif en fonction de la sélection de l'utilisateur
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    // Met à jour l'état du composant actif avec la valeur sélectionnée
    setActiveComponent(e.target.value);
  };

  // Retourne le gestionnaire de changement et le composant actif pour utilisation dans d'autres composants
  return { handleChange, activeComponent };
}


