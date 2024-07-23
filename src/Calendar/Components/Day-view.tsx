import React from 'react';
import { ButtonBack } from '../UI/ButtonBack';
import { ButtonForward } from '../UI/ButtonForward';
import { useDayCalendar } from '../Hooks/useDayCalendar';

export const DayView = () => {
  const { nav, days, dayDisplay, setNav, handleTodayClick } = useDayCalendar();
  
  return (
    <div>
      <header className='flex items-center'>
        <div className='flex mb-4 items-center'>
          <ButtonBack onClick={() => setNav(nav - 1)} />
          <button onClick={handleTodayClick} className='p-2 rounded'>Today</button>
          <ButtonForward onClick={() => setNav(nav + 1)} />
          <h1 className=''>{dayDisplay}</h1>
        </div>
      </header>
      <div className='flex gap-1 p-2 '>
        <div className='w-full m-0'>
          {
            Array.from({ length: 24 }, (_, hour) => (
              <div key={hour} className='p-5 flex w-full'>
                {days[0].value ? '':'adala'}
                <p className='rounded border border-gray-300 bg-slate-100 hover:bg-gradient-to-r from-blue-200 to-violet-400 p-2 text-end'>
                  {days[0]?.isCurrentDay ? '' : ''}
                  {days[0]?.isWeekend ? 'bg-slate-300' : ''}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};
