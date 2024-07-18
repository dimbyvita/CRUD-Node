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
  const calculateDayString = (i: number, firstDayOfMonth: Date): string => {
    return new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth(), i).toISOString().split('T')[0];
  };

  // useEffect pour mettre à jour les états du mois et de l'année lorsque la navigation change
  useEffect(() => {
    const newDate = new Date(dt);
    newDate.setMonth(dt.getMonth() + nav);
    const newMonth = newDate.getMonth();
    const newYear = newDate.getFullYear();
    setMonth(newMonth);
    setYear(newYear);

    // Mettre à jour l'affichage de la date
    setDateDisplay(newDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }));

    // Générer le tableau des jours pour le mois en cours
    const daysArray: Day[] = [];
    const firstDayOfMonth = new Date(newYear, newMonth, 1);
    const paddingDays = firstDayOfMonth.getDay();
    const numDaysInMonth = daysInMonth(newMonth, newYear);

    // Jours du mois précédent
    for (let i = paddingDays - 1; i >= 0; i--) {
      const prevMonthDate = new Date(newYear, newMonth, -i);
      daysArray.push({
        date: prevMonthDate.toISOString().split('T')[0],
        value: prevMonthDate.getDate(),
        isCurrentDay: false,
        isWeekend: prevMonthDate.getDay() === 0 || prevMonthDate.getDay() === 6,
        isNextMonthDay: false,
        isPreviousMonthDay: true,
        isPublicHoliday: false,
      });
    }

    // Jours du mois en cours
    for (let i = 1; i <= numDaysInMonth; i++) {
      const dayString = calculateDayString(i, firstDayOfMonth);
      const dayDate = new Date(newYear, newMonth, i);
      daysArray.push({
        date: dayString,
        value: i,
        isCurrentDay: i === dt.getDate() && newMonth === dt.getMonth() && newYear === dt.getFullYear(),
        isWeekend: dayDate.getDay() === 0 || dayDate.getDay() === 6,
        isNextMonthDay: false,
        isPreviousMonthDay: false,
        isPublicHoliday: false, // Mis de coté pour le moment
      });
    }

    // Jours du mois suivant
    const totalDays = paddingDays + numDaysInMonth;
    for (let i = 1; i <= (7 - (totalDays % 7)) % 7; i++) {
      const nextMonthDate = new Date(newYear, newMonth + 1, i);
      daysArray.push({
        date: nextMonthDate.toISOString().split('T')[0],
        value: nextMonthDate.getDate(),
        isCurrentDay: false,
        isNextMonthDay: true,
        isPreviousMonthDay: false,
        isWeekend: nextMonthDate.getDay() === 0 || nextMonthDate.getDay() === 6,
        isPublicHoliday: false,
      });
    }

    // Mettre à jour l'état des jours
    setDays(daysArray);
  }, [nav]);

  // Fonction pour réinitialiser la vue sur le mois actuel
  const handleTodayClick = () => {
    setNav(0);
  };

  // Retourner les états et fonctions nécessaires
  return { nav, days, dateDisplay, setNav, handleTodayClick };
};
