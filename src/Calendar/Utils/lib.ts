import { WeekDay } from "./CalendarUtils";

// Liste des jours de la semaine
export const weekDays: WeekDay[] = [
  { day: 'Su', isWeekend: true },
  { day: 'Mo', isWeekend: false },
  { day: 'Tu', isWeekend: false },
  { day: 'We', isWeekend: false },
  { day: 'Th', isWeekend: false },
  { day: 'Fr', isWeekend: false },
  { day: 'Sa', isWeekend: true },
];

// Liste des mois de l'année
export const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Obtenir la date actuelle
export const dt = new Date();

// Obtenir le jour actuel
export const day = dt.getDate();

// Obtenir le mois actuel (indexé de 0 à 11)
export const month = dt.getMonth();

// Obtenir l'année actuelle
export const year = dt.getFullYear();

// Calculer le premier jour du mois actuel
export const firstDayOfMonth = new Date(year, month, 1);

// Calculer les jours de remplissage (padding) en fonction du premier jour du mois
export const paddingDays = firstDayOfMonth.getDay();

// Fonction pour obtenir le nombre de jours dans un mois donné d'une année donnée
export const daysInMonth = (month: number, year: number): number => {
  // Le jour 0 du mois suivant renvoie le dernier jour du mois actuel
  return new Date(year, month + 1, 0).getDate();
};

// Créer une nouvelle date avec le mois actuel
export const newDate = new Date().setMonth(new Date().getMonth());

// Tableau pour stocker les jours du mois (sera rempli plus tard)
export const daysArray = [];

// Obtenir le nombre de jours dans le mois actuel
export const numDaysInMonth = daysInMonth(month, year);

// Format de la date pour obtenir une chaîne lisible (nom du jour de la semaine, année, mois, jour)
export const dateString = firstDayOfMonth.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric'
});

// Fonction pour vérifier si deux dates ont le même Event
export const isSameDay = (date1: Date, date2: Date): boolean => {
  return date1.getDate() === date2.getDate() &&
         date1.getMonth() === date2.getMonth() &&
         date1.getFullYear() === date2.getFullYear();
};

// Fonction pour vérifier si une heure donnée est dans la plage d'un événement
export const isInHourRange = (hour: number, eventStart: Date, eventEnd: Date): boolean => {
  return (hour >= eventStart.getHours() && hour < eventEnd.getHours()) ||
         (hour === eventStart.getHours() && eventStart.getMinutes() > 0) ||
         (hour === eventEnd.getHours() && eventEnd.getMinutes() > 0);
};
