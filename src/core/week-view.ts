import { IView } from './view';
import add from 'date-fns/add';
import startOfWeek from 'date-fns/startOfWeek';
import sub from 'date-fns/sub';

export class WeekView implements IView {
  getNextDate(date: Date): Date {
    return add(date, { weeks: 1 });
  }
  getPrevDate(date: Date): Date {
    return sub(date, { weeks: 1 });
  }
  getTodayDate(): Date {
    return startOfWeek(new Date());
  }
}
