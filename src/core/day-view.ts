import { IView } from './view';
import add from 'date-fns/add';
import startOfDay from 'date-fns/startOfDay';
import sub from 'date-fns/sub';
import { DayGrid } from '../components/grids/day-grid/day-grid';

export class DayView implements IView {
  getComponent() {
    return DayGrid;
  }
  getNextDate(date: Date): Date {
    return add(date, {
      days: 1,
    });
  }
  getPrevDate(date: Date): Date {
    return sub(date, {
      days: 1,
    });
  }

  getTodayDate(): Date {
    return startOfDay(new Date());
  }

  getDayNames() {
    return [];
  }
}
