import React from 'react';
import { AfficheDayProps } from '../Utils/CalendarUtils';

export const AfficheDay: React.FC<AfficheDayProps> = ({ day, onClick }) => {
  return (
    <div onClick={onClick}> {/* Déclenche la fonction onClick lors du clic sur le div */}
      <div className='bg-red-200/20 py-2 px-3 rounded-full'>
        {/* Affiche la valeur du jour, sauf s'il s'agit d'un jour du moi prochain ou du moi precedent alors, remplissage ("padding") */}
        {day.value !== 'padding' ? day.value : ''}
      </div>
    </div>
  );
};
