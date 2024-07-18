import React from 'react'
import { day, weekDays } from '../Utils/lib'
import { Day } from '../Utils/CalendarUtils'
import { ButtonBack } from '../UI/ButtonBack'
import { ButtonForward } from '../UI/ButtonForward'
import { useWeekCalendar } from '../Hooks/useWeekCalendar'



export const WeekView = () => {
  const { nav, days, weekDisplay, setNav, handleTodayClick } = useWeekCalendar()
  return (
    <div className='h-full'>
      <div id='Simple Calendar' className='flex h-full py-5'>
        <div className='bg-slate-200 flex flex-col gap-3 p-2 rounded-md h-full w-full'>
          <header className='flex items-center'>
            {/* En-tête du calendrier avec les boutons de navigation */}
            <div className='flex mb-4 items-center'>
              <ButtonBack onClick={() => setNav(nav - 1)}/> 
                <button onClick={handleTodayClick} className='p-2 rounded'>Today</button>
              <ButtonForward onClick={() => setNav(nav + 1)}/> 
              <h1 className=''>{weekDisplay}</h1> {/* Affichage du mois et de l'année en cours */}
            </div>
          </header>

          <div className=' h-full flex'>
            {/* Tableau pour afficher les jours du mois */}
            <table className='w-full table-fixed to-violet-400-collapse'>
              <thead>
                <tr>
                  {/* Affichage des jours de la semaine */}
                  {weekDays.map(day => (
                    <th key={day.day} className={` p-2 text-center border border-gray-300
                    ${day.isWeekend ? 'bg-slate-200 text-slate-800' : ''}
                    `}>
                      {day.day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Diviser les jours en semaines */}
                {Array.from({ length: 24 }, (_, hour) => (
                  <tr key={hour} className='p-5'>
                    {/* Affichage des jours de la semaine */}
                    {days.map((day: Day, index: number) => (
                      <td
                        key={index}
                        className={`rounded border border-gray-300 bg-slate-100 hover:bg-gradient-to-r from-blue-200 to-violet-400 p-2 text-end
                          ${day.isWeekend ? 'bg-slate-200 text-slate-400' : ''} 
                          ${day.isCurrentDay ? 'bg-blue-200 text-blue-700' : ''}
                          ${day.isNextMonthDay ? 'text-slate-600 bg-slate-300' : ''}
                          ${day.isPreviousMonthDay? 'text-slate-600 bg-slate-300' : ''}
                          `}
                      >
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
