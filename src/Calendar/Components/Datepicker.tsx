import React, { ReactElement } from 'react'; 
import { useMonthCalendar } from '../Hooks/useMonthCalendar'; 
import { AfficheDay } from '../services/AfficheDay'; 
import { ButtonBack } from '../UI/ButtonBack'; 
import { ButtonForward } from '../UI/ButtonForward'; 
import { Day } from '../Utils/CalendarUtils';
import { weekDays } from '../Utils/lib';


export const Datepicker = (): ReactElement => {
  const { nav, days, monthDisplay, setNav,handleTodayClick } = useMonthCalendar();

  return (
    <div className='h-full'>
      <div id='Simple Calendar' className='flex w-96 h-96 py-5'>
        <div className='bg-slate-200 flex flex-col gap-3 p-2 rounded-md h-full'>
          <header className='flex items-center'>
            {/* En-tête du calendrier avec les boutons de navigation */}
            <div className='flex mb-4 items-center'>
              <ButtonBack onClick={() => setNav(nav - 1)}/> 
                <button onClick={handleTodayClick} className='p-2 rounded'>Today</button>
              <ButtonForward onClick={() => setNav(nav + 1)}/> 
              <h1 className=''>{monthDisplay}</h1> {/* Affichage du mois et de l'année en cours */}
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
                {Array.from({ length: Math.ceil(days.length / 7) }, (_, rowIndex) => (
                  <tr key={rowIndex} className='p-5'>
                  {/* Affichage des jours de la semaine */}
                  {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day: Day, index: number) => (
                    <td
                      key={index}
                      className={`relative border border-gray-300 bg-slate-100 hover:bg-gradient-to-r from-blue-200 to-violet-400 p-2 
                        cursor-pointer
                        ${day.isWeekend ? 'bg-slate-100 text-slate-400' : ''} 
                        ${day.isCurrentDay ? 'bg-blue-300/45 text-blue-700' : ''}
                        ${day.isNextMonthDay ? 'text-slate-600 bg-slate-300' : ''}
                        ${day.isPreviousMonthDay ? 'text-slate-600 bg-slate-300' : ''}
                      `}
                    >
                      <span className='absolute top-2 right-2 text-sm font-semibold'>
                        <AfficheDay
                          day={day} // Composant pour afficher les détails du jour
                        />
                      </span>
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
  );
};
