import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Day } from '../Utils/CalendarUtils';

export const useWeekCalendar = () => {
    const [nav, setNav] = useState<number>(0); // État pour gérer la navigation des semaines (0 signifie la semaine actuelle)
    const [weekDisplay, setWeekDisplay] = useState('');
    const [days, setDays] = useState<Day[]>([]); // État pour stocker les jours de la semaine

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/calendar/week/${nav}`);
                setDays(response.data.days);
                setWeekDisplay(response.data.weekDisplay);
            } catch (error) {
                console.error('Error fetching week data:', error);
    
        }
        fetchData();
    }
    }, [nav]);

    // Fonction pour réinitialiser la vue sur la semaine actuelle
    const handleTodayClick = () => {
        setNav(0);
    };

    // Retourner les états et fonctions nécessaires
    return { nav, days, weekDisplay, setNav, handleTodayClick };
};
