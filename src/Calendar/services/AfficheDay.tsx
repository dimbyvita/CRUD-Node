import React from 'react';
import { AfficheDayProps } from '../Utils/CalendarUtils';

export const AfficheDay: React.FC<AfficheDayProps> = ({ day, onClick }) => {
  return (
    <div onClick={onClick}> {/* Déclenche la fonction onClick lors du clic sur le div */}
      <div>
        {/* Affiche la valeur du jour, sauf s'il s'agit d'un jour du moi prochain ou du moi precedent alors, remplissage ("padding") */}
        {day.value !== 'padding' ? day.value : ''}
      </div>
    </div>
  );
};
