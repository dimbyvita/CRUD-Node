import React, { ReactElement } from 'react'; 
import { weekDays } from '../Utils/lib'; 
import { useMonthCalendar } from '../Hooks/useMonthCalendar'; 
import { AfficheDay } from '../services/AfficheDay'; 
import { ButtonBack } from '../UI/ButtonBack'; 
import { Day } from '../Utils/CalendarUtils'; 
import { ButtonForward } from '../UI/ButtonForward'; 


export const MonthView = (): ReactElement => {
  const { nav, days, dateDisplay, setNav,handleTodayClick } = useMonthCalendar();

  return (
    <div>
      <div id='Simple Calendar' className='hidden md:block h-full py-5'>
        <div className='bg-slate-200 p-2 rounded-md w-full'>
          <div className=''>
            {/* En-tête du calendrier avec les boutons de navigation */}
            <div className='flex mb-4 items-center'>
              <ButtonBack onClick={() => setNav(nav - 1)}/> 
                <button onClick={handleTodayClick} className='p-2 rounded'>Today</button>
              <ButtonForward onClick={() => setNav(nav + 1)}/> 
              <h1 className=''>{dateDisplay}</h1> {/* Affichage du mois et de l'année en cours */}
            </div>
          </div>

          <div>
            {/* Tableau pour afficher les jours du mois */}
            <table className='w-full table-fixed to-violet-400-collapse'>
              <thead>
                <tr>
                  {/* Affichage des jours de la semaine */}
                  {weekDays.map(day => (
                    <th key={day} className='w-1/7 p-2 text-center'>
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Diviser les jours en semaines */}
                {Array.from({ length: Math.ceil(days.length / 7) }, (_, rowIndex) => (
                  <tr key={rowIndex}>
                    {/* Affichage des jours de la semaine */}
                    {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day: Day, index: number) => (
                      <td
                        key={index}
                        className={`rounded hover:bg-gradient-to-r from-blue-200 to-violet-400 p-2 text-center ${
                          day.isCurrentDay ? 'bg-blue-200' : '' // Mettre en évidence le jour courant
                        } ${day.value === 'padding' ? 'bg-gray-100' : ''}`} // Style pour les jours de remplissage
                      >
                        <AfficheDay
                          day={day} // Composant pour afficher les détails du jour
                        />
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
