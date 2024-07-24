import React from 'react'
import { ButtonBack } from '../UI/ButtonBack'
import { ButtonForward } from '../UI/ButtonForward'
import { useWeekCalendar } from '../Hooks/useWeekCalendar'
import { weekDays } from '../Utils/lib'
import { Day } from '../Utils/CalendarUtils'



export const WeekView = () => {
  const { nav, days, weekDisplay, setNav, handleTodayClick } = useWeekCalendar()
  return (
    <div className='h-full overflow-y-scroll md:overflow-y-hidden'>
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

          <div className=' h-full flex overflow-y-scroll'>
            {/* Tableau pour afficher les jours du mois */}
            <table className='w-full table-fixed to-violet-400-collapse'>
              <thead>
                <tr>
                  {/* Header row for days of the week */}
                  {weekDays.map((day, index) => (
                    <th key={index} className={`p-2 text-center border border-gray-300 
                      ${day.isWeekend ? 'bg-slate-200 text-slate-800' : ''}
                    `}>
                      <div>
                        <p>{day.day}</p> {/* Day label */}
                        <p className={`bg-slate-300 rounded-full py-2 px-4 ${day.isWeekend ? 'text-slate-800' : ''}`}>
                          {days[index]?.value || ''}{/* Date value */}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Diviser les jours en semaines */}
                {Array.from({ length: 24 }, (_, hour) => (
                  <tr key={hour} className='p-5 '>
                    {/* Affichage des jours de la semaine */}
                    {days.map((day: Day, index: number) => (
                      <td
                      key={index}
                      className={`rounded border border-gray-300  hover:bg-gradient-to-r from-blue-200 to-violet-400 p-2 text-end                        ${day.isWeekend ? 'bg-slate-300/40 text-slate-400' : ''} 
                        ${day.isCurrentDay ? 'bg-blue-300/20 text-blue-700' : ''}
                        ${day.isPassedDay ? 'cursor-not-allowed': 'cursor-pointer'}
                        `}
                        >a
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
