import React, { useEffect, useState } from 'react';
import { daysInMonth, dt } from '../Utils/lib';
import { Day } from '../Utils/CalendarUtils';

// Hook personnalisé pour gérer l'état du calendrier mensuel
export const useMonthCalendar = () => {
  const [nav, setNav] = useState<number>(0); // État pour gérer la navigation des mois (0 signifie le mois actuel)
  const [month, setMonth] = useState<number>(dt.getMonth()); // État pour stocker le mois actuel
  const [year, setYear] = useState<number>(dt.getFullYear()); // État pour stocker l'année actuelle
  const [dateDisplay, setDateDisplay] = useState<string>(''); // État pour afficher la date formatée
  const [days, setDays] = useState<Day[]>([]); // État pour stocker les jours du mois

  // Fonction pour calculer la chaîne de date pour chaque jour du mois
  const calculateDayString = (i: number): string => {
    const firstDayOfMonth = new Date(year, month, 1);
    return new Date(year, month, i - firstDayOfMonth.getDay() + 1).toISOString().split('T')[0];
  };

  // useEffect pour mettre à jour les états du mois et de l'année lorsque la navigation change
  useEffect(() => {
    if (nav !== 0) {
      const newDate = new Date(new Date().setMonth(new Date().getMonth() + nav));
      setMonth(newDate.getMonth());
      setYear(newDate.getFullYear());
    } else {
      setMonth(dt.getMonth());
      setYear(dt.getFullYear());
    }

    // Mettre à jour l'affichage de la date
    setDateDisplay(new Date(year, month).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));

    // Générer le tableau des jours pour le mois en cours
    const daysArray: Day[] = [];
    const firstDayOfMonth = new Date(year, month, 1);
    const paddingDays = firstDayOfMonth.getDay();
    const numDaysInMonth = daysInMonth(month, year);

    for (let i = 1; i <= paddingDays + numDaysInMonth; i++) {
      const dayString = calculateDayString(i);

      if (i > paddingDays) {
        daysArray.push({
          date: dayString,
          value: i - paddingDays,
          isCurrentDay: i - paddingDays === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear()
        });
      } else {
        daysArray.push({
          date: dayString,
          value: 'padding',
          isCurrentDay: false
        });
      }
    }

    // Mettre à jour l'état des jours
    setDays(daysArray);
  }, [nav, month, year]);

  // Fonction pour réinitialiser la vue sur le mois actuel
  const handleTodayClick = () => {
    const today = new Date();
    setMonth(today.getMonth());
    setYear(today.getFullYear());
    setNav(0);
  };

  // Retourner les états et fonctions nécessaires
  return { nav, days, dateDisplay, setNav, handleTodayClick };
};
