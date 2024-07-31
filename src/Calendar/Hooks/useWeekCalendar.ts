import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Day, Events } from '../Utils/CalendarUtils';
import { Api_Event } from '../../Route/Api';

export const useWeekCalendar = () => {
    const [nav, setNav] = useState<number>(0); // State to manage week navigation (0 means the current week)
    const [weekDisplay, setWeekDisplay] = useState('');
    const [days, setDays] = useState<Day[]>([]); // State to store the days of the week
    const [events, setEvents] = useState<Events[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5001/api/calendar/weekly/${nav}`);
                const eventAPI = await axios.get(Api_Event);    
                setDays(response.data.days);
                setWeekDisplay(response.data.weekDisplay);
                setEvents(eventAPI.data);
            } catch (error) {
                console.error('Error fetching week data:', error);
            }
        };
        // Call fetchData function to get data
        fetchData();

    }, [nav]); // Dependency array includes nav to refetch data when nav changes

    // Function to reset the view to the current week
    const handleTodayClick = () => {
        setNav(0);
    };


    return { nav, events, days, weekDisplay, setNav, setEvents, handleTodayClick };
};
