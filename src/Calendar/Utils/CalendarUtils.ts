// Type pour les événements du calendrier
export type Events = {
    id: number;
    title: string;
    start: string;
    end: string;
  }
  
  // Type pour les formats du calendrier
  export type CalendarType = 'monthly' | 'weekly' | 'daily';
  
  // Configuration du calendrier
  export type CalendarConfig = {
    type: CalendarType;
    events: Events[];
    value: number | 'padding';
  }
  
  // Interface pour les props du composant AfficheDay
  export interface AfficheDayProps {
    day: Day;
    onClick?: () => void;
  }
  
  // Interface pour les props du composant Button
  export interface ButtonProps {
    onClick: () => void;
  }
  
  // Interface pour représenter un jour dans le calendrier
  export interface Day {
    date: string;
    event?: Events[];
    value: number | 'padding';
    isCurrentDay: boolean;
  }