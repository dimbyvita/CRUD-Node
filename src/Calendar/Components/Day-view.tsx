import React, { useEffect, useState } from 'react';


interface Event {
  day_start: string;
  day_end: string;
  title: string;
}

interface DayHoursProps {
  date: Date;
}

const DayHours: React.FC<DayHoursProps> = ({ date }) => {
  // Create an array of 24 hours (0h to 23h)
  const hours = Array.from({ length: 24 }, (_, i) => i);
  const [clicked, setClicked] = useState<number | null>(null);


  return (
    <div>
      <h2>Hours:</h2>
      <ul>
        {hours.map((hour) => (
          <li
            key={hour}
            className='w-full flex h-28 gap-10 items-center border-b-2'
            
          >
            {hour.toString().padStart(2, '0')}:00
            {/* Display events */}
            
          </li>
        ))}
      </ul>
      {clicked !== null && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-white p-4 rounded shadow-lg">
            
          </div>
        </div>
      )}
    </div>
  );
};

export default DayHours;
