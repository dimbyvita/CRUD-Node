import React from 'react';
import FormatCalendar from '../services/FormatCalendar';
import { Datepicker } from '../Components/Datepicker';


export const CalendarContainer: React.FC = () => {
  return (
    <div className='overflow-y-scroll flex gap-2 p-2'>
      <Datepicker/>
      <FormatCalendar />
    </div>
  );
};


