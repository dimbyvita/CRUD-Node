import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Day } from '../Utils/CalendarUtils';

// Hook personnalisé pour gérer l'état du calendrier mensuel
export const useMonthCalendar = () => {
  const [nav, setNav] = useState<number>(0); // État pour gérer la navigation des mois (0 signifie le mois actuel)
  const [dateDisplay, setDateDisplay] = useState<string>(''); // État pour afficher la date formatée
  const [days, setDays] = useState<Day[]>([]); // État pour stocker les jours du mois

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/calendar/month/${nav}`);
        setDays(response.data.days);
        setDateDisplay(response.data.dateDisplay);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchData();
  }, [nav]);

  // Fonction pour réinitialiser la vue sur le mois actuel
  const handleTodayClick = () => {
    setNav(0);
  };

  // Retourner les états et fonctions nécessaires
  return { nav, days, dateDisplay, setNav, handleTodayClick };
};
