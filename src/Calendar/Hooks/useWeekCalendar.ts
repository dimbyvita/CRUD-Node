import React, { useEffect, useState } from 'react';
import { daysInMonth, dt } from '../Utils/lib';
import { Day } from '../Utils/CalendarUtils';

export const useWeekCalendar = () => {
    const [nav, setNav] = useState<number>(0); // État pour gérer la navigation des semaines (0 signifie la semaine actuelle)
    const [weekDisplay, setWeekDisplay] = useState('');
    const [month, setMonth] = useState<number>(dt.getMonth()); // État pour stocker le mois actuel
    const [year, setYear] = useState<number>(dt.getFullYear()); // État pour stocker l'année actuelle
    const [days, setDays] = useState<Day[]>([]); // État pour stocker les jours de la semaine

    useEffect(() => {
        const newDate = new Date(dt);
        newDate.setDate(newDate.getDate() + nav * 7); // Naviguer par semaine
        const newYear = newDate.getFullYear();
        const newMonth = newDate.getMonth();
        const firstDayOfWeek = new Date(newYear, newMonth, newDate.getDate() - newDate.getDay());
        const lastDayOfWeek = new Date(firstDayOfWeek);
        lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

        setMonth(newMonth);
        setYear(newYear);

        setWeekDisplay(`${firstDayOfWeek.toLocaleDateString()} - ${lastDayOfWeek.toLocaleDateString()}`);

        // Générer le tableau des jours pour la semaine en cours
        const daysArray: Day[] = [];
        for (let i = 0; i < 7; i++) {
            const dayDate = new Date(firstDayOfWeek);
            dayDate.setDate(firstDayOfWeek.getDate() + i);
            daysArray.push({
                date: dayDate.toISOString().split('T')[0],
                value: dayDate.getDate(),
                isCurrentDay: dayDate.toDateString() === new Date().toDateString(),
                isWeekend: dayDate.getDay() === 0 || dayDate.getDay() === 6,
                isNextMonthDay: false,
                isPreviousMonthDay: false,
                isPublicHoliday: false, // À adapter selon votre logique de jours fériés
            });
        }

        setDays(daysArray);
    }, [nav]);

    // Fonction pour réinitialiser la vue sur la semaine actuelle
    const handleTodayClick = () => {
        setNav(0);
    };

    // Retourner les états et fonctions nécessaires
    return { nav, days, weekDisplay, setNav, handleTodayClick };
};
