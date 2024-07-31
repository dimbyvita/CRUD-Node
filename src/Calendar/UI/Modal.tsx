import React, { useState } from 'react';
import { ModalEventProps } from '../Utils/CalendarUtils';

export const ModalEvent: React.FC<ModalEventProps> = ({ onClose, onSave, day }) => {
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  const handleAddEvent = async () => {
    if (title.trim()) {
      try {
        const response = await fetch('http://localhost:5001/events', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ownerName: 'Owner', // Remplacez par les données réelles si nécessaire
            title,
            description,
            dEntre: dateStart,
            dSortie: dateEnd,
          }),
        });

        if (response.status === 201 || response.status === 200) { // Traiter les statuts 200 et 201
          const data = await response.json();
          console.log(data);
          setTitle(''); // Réinitialiser le champ de titre après avoir ajouté l'événement
          setDateStart('');
          setDateEnd('');
          setDescription('');
          onSave(data.title);
          onClose();
        } else {
          throw new Error(`Erreur Http! statut: ${response.status}`);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données: ', error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className='p-5'>
        <div className='w-40 space-y-4'>
          <div>
            <h2>New Event</h2>
            <div className='flex'>
              <input
                className={`w-38 rounded-md overflow-hidden focus:ring-indigo-500 ${error ? 'error' : ''}`}
                type="text"
                placeholder="Event Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                id="eventTitleInput"
              />
            </div>
            <div className="flex">
              <input
                className={`w-38 rounded-md overflow-hidden focus:ring-indigo-500 ${error ? 'error' : ''}`}
                id="eventDateInput"
                placeholder="Event Start Date"
                type="date"
                value={dateStart}
                onChange={(e) => setDateStart(e.target.value)}
              />
              <input
                className={`w-38 rounded-md overflow-hidden focus:ring-indigo-500 ${error ? 'error' : ''}`}
                id="eventDateInput"
                placeholder="Event End Date"
                type="date"
                value={dateEnd}
                onChange={(e) => setDateEnd(e.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <input 
                className={`w-38 rounded-md overflow-hidden focus:ring-indigo-500 ${error ? 'error' : ''}`}
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                id="eventDescriptionInput"
              />
            </div>
            {error && <div className='text-red-500'>Please enter a title</div>}
          </div>
          <div className='flex justify-between'>
            <button
              className='px-4 py-1 rounded-md bg-gradient-to-r from-blue-200 to-violet-400'
              onClick={handleAddEvent}
            >
              Save
            </button>
            <button
              className='px-4 py-1 rounded-md bg-gradient-to-r from-blue-200 to-violet-400'
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <div id="modalBackDrop"></div>
    </>
  );
};
