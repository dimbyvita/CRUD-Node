import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Day, Events } from '../Utils/CalendarUtils';
import { Api_Event } from '../../Route/Api';

export const useMonthCalendar = () => {
  const [nav, setNav] = useState<number>(0);
  const [monthDisplay, setMonthDisplay] = useState<string>('');
  const [days, setDays] = useState<Day[]>([]);
  const [eventsApi, setEventsApi] = useState<Events[]>([]);
  const [formData, setFormData] = useState<Events>({
    id: "",
    ownerName: "",
    title: "",
    description: "",
    dEntre: "",
    dSortie: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const calendarResponse = await axios.get(`http://localhost:5001/api/calendar/monthly/${nav}`);
        const eventsResponse = await axios.get(Api_Event);

        const fetchedDays: Day[] = calendarResponse.data.days || [];
        const fetchedEvents: Events[] = eventsResponse.data || [];

        console.log('Fetched Days:', fetchedDays);
        console.log('Fetched Events:', fetchedEvents);

        const daysWithEvents = mapEventsToDays(fetchedDays, fetchedEvents);
        console.log('Days with Events:', daysWithEvents);

        setDays(daysWithEvents);
        setMonthDisplay(calendarResponse.data.monthDisplay || '');
        setEventsApi(fetchedEvents);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchData();
  }, [nav]);

  const addEvent = async (event: Events) => {
    try {
      await axios.post(Api_Event, event);
      const eventsResponse = await axios.get(Api_Event);
      setEventsApi(eventsResponse.data || []);
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const updateEvent = async (event: Events) => {
    try {
      await axios.put(`${Api_Event}/update/${event.id}`, event);
      const eventsResponse = await axios.get(Api_Event);
      setEventsApi(eventsResponse.data || []);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      await axios.delete(`${Api_Event}/delete/${id}`);
      const eventsResponse = await axios.get(Api_Event);
      setEventsApi(eventsResponse.data || []);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTodayClick = () => {
    setNav(0);
  };

  const mapEventsToDays = (days: Day[], events: Events[]): Day[] => {
    return days.map(day => {
      const dayEvents = events.filter(event => {
        const eventStartDate = new Date(event.dEntre).toDateString();
        const eventEndDate = new Date(event.dSortie).toDateString();
        const dayDate = new Date(day.date).toDateString();
        return eventStartDate <= dayDate && dayDate <= eventEndDate;
      });

      return {
        ...day,
        events: dayEvents
      };
    });
  };

  return { nav, eventsApi, days, monthDisplay, setNav, handleTodayClick, addEvent, updateEvent, deleteEvent, handleChange, formData };
};
