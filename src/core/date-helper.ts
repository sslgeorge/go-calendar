import { startOfToday } from 'date-fns';

export function getToday() {
  return startOfToday();
}

export function getNextDay(date: Date) {
  return new Date(date.getTime() + 24 * 60 * 60 * 1000);
}

export function getPreviousDay(date: Date) {
  return new Date(date.getTime() - 24 * 60 * 60 * 1000);
}
