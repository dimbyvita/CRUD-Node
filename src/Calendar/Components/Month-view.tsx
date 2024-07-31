import React, { ReactElement, useState } from 'react';
import { useMonthCalendar } from '../Hooks/useMonthCalendar';
import { AfficheDay } from '../services/AfficheDay';
import { ButtonBack } from '../UI/ButtonBack';
import { ButtonForward } from '../UI/ButtonForward';
import { Day, Events } from '../Utils/CalendarUtils';
import { weekDays } from '../Utils/lib';
import { ModalEvent } from '../UI/Modal';

export const MonthView = (): ReactElement => {
  const { nav, eventsApi, days, monthDisplay, setNav, handleTodayClick, addEvent, updateEvent, deleteEvent, handleChange, formData } = useMonthCalendar();
  const [clicked, setClicked] = useState<Day | null>(null);

  console.log('Rendered Days:', days);

  return (
    <div className='h-full'>
      <div id='Simple Calendar' className='flex h-full py-5'>
        <div className='bg-slate-200 flex flex-col gap-3 p-2 rounded-md h-full w-full'>
          <header className='flex items-center'>
            <div className='flex mb-4 items-center'>
              <ButtonBack onClick={() => setNav(nav - 1)} />
              <button onClick={handleTodayClick} className='p-2 rounded'>Today</button>
              <ButtonForward onClick={() => setNav(nav + 1)} />
              <h1 className=''>{monthDisplay}</h1>
            </div>
          </header>

          <div className='h-full flex'>
            <table className='w-full table-fixed border-collapse'>
              <thead>
                <tr>
                  {weekDays.map(day => (
                    <th
                      key={day.day}
                      className={`p-2 text-center border border-gray-300 ${day.isWeekend ? 'bg-slate-200 text-slate-800' : ''}`}
                    >
                      {day.day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: Math.ceil(days.length / 7) }, (_, rowIndex) => (
                  <tr key={rowIndex} className='p-5'>
                    {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day: Day, index: number) => (
                      <td
                        key={index}
                        className={`relative border border-gray-300 p-2
                          ${day.isWeekend ? 'bg-slate-100 text-slate-400' : 'bg-slate-100'}
                          ${day.isCurrentDay ? 'bg-blue-300/45 text-blue-700' : ''}
                          ${day.isNextMonthDay || day.isPreviousMonthDay ? 'text-slate-600 bg-slate-300' : ''}
                          ${day.isPassedDay ? 'cursor-not-allowed' : 'cursor-pointer'}`
                        }
                        onClick={() => !day.isPassedDay && setClicked(day)}
                      >
                        <span className='absolute top-2 right-2 text-sm font-semibold'>
                          <AfficheDay day={day} />
                        </span>
                        {day.events && day.events.length > 0 && (
                          <div className="absolute bottom-0 left-0 right-0 p-1 text-center text-white bg-opacity-75">
                            {day.events.map((event: Events, eventIndex: number) => (
                              <div key={eventIndex} className="bg-blue-500 text-xs rounded px-1 m-1">
                                {event.title}
                              </div>
                            ))}
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {clicked && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            <ModalEvent
              day={{ ...clicked, date: new Date(clicked.date) }}
              onClose={() => setClicked(null)}
              onSave={(title: string) => {
                addEvent({
                  ...formData,
                  title,
                  dEntre: clicked.date,
                  dSortie: clicked.date
                });
                setClicked(null);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
