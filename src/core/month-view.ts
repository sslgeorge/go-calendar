import { IView } from './view';
import add from 'date-fns/add';
import startOfMonth from 'date-fns/startOfMonth';
import sub from 'date-fns/sub';

export class MonthView implements IView {
  getNextDate(date: Date): Date {
    return add(date, { months: 1 });
  }
  getPrevDate(date: Date): Date {
    return sub(date, { months: 1 });
  }
  getTodayDate(): Date {
    return startOfMonth(new Date());
  }
}
