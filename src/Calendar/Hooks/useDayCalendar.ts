import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Day, Events } from '../Utils/CalendarUtils';
import { Api_Event } from '../../Route/Api';

// Hook personnalisé pour gérer l'état du calendrier mensuel
export const useDayCalendar = () => {
  const [nav, setNav] = useState<number>(0); // État pour gérer la navigation des mois (0 signifie le mois actuel)
  const [dayDisplay, setdayDisplay] = useState<string>(''); // État pour afficher la date formatée
  const [days, setDays] = useState<Day[]>([]); // État pour stocker les jours du mois
  const [events, setEvents] = useState<Events[]>([]); // État pour stocker les événements du mois

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/api/calendar/daily/${nav}`);
        const eventAPI = await axios.get(Api_Event);
        setDays(response.data.days);
        setdayDisplay(response.data.dayDisplay);
        setEvents(eventAPI.data);
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
  return { nav, events, days, dayDisplay, setNav, setEvents, handleTodayClick };
};
