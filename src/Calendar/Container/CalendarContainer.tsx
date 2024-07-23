import React from 'react';
import FormatCalendar from '../services/FormatCalendar';


export const CalendarContainer: React.FC = () => {
  return (
    <div className='overflow-y-scroll md:overflow-hidden'>
      <FormatCalendar />
    </div>
  );
};


