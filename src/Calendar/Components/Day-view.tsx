import React from 'react';
import { ButtonBack } from '../UI/ButtonBack';
import { ButtonForward } from '../UI/ButtonForward';
import { useDayCalendar } from '../Hooks/useDayCalendar';

export const DayView = () => {
  const { nav, days, dayDisplay, setNav, handleTodayClick } = useDayCalendar();

  // Check if days is an array and has at least one element
  const isDaysValid = Array.isArray(days) && days.length > 0;
 
  return (
    <div className='h-full overflow-y-scroll p-3 '>
      <header className='flex items-center'>
        <div className='flex mb-4 items-center'>
          <ButtonBack onClick={() => setNav(nav - 1)} />
          <button onClick={handleTodayClick} className='p-2 rounded'>Today</button>
          <ButtonForward onClick={() => setNav(nav + 1)} />
          <h1 className=''>{dayDisplay}</h1>
        </div>
      </header>

      <div className='flex gap-1 p-2'>
        <div className='w-full'>
          {isDaysValid ? (
            Array.from({ length: 24 }, (_, hour) => (
              <div key={hour} className='p-1 w-full cursor-pointer'>
                {days[0].value ? '':'adala'}
                <p className='rounded border border-gray-300 bg-slate-100 hover:bg-gradient-to-r from-blue-200 to-violet-400 p-2 '>
                  {days[0]?.isCurrentDay ? '(Today)' : 'otherdays'}
                  {days[0]?.isWeekend ? '(Weekend)' : ''}
                  {days[0]?.isPassedDay ? '(Passed) ' : ''}
                </p>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};
