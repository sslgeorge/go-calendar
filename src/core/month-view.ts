import { IView } from './view';
import add from 'date-fns/add';
import startOfMonth from 'date-fns/startOfMonth';
import sub from 'date-fns/sub';
import { FunctionComponent } from 'preact';
import { MonthGrid } from '../components/grids/month-grid/month-grid';

export class MonthView implements IView {
  getComponent(): FunctionComponent {
    return MonthGrid;
  }
  getNextDate(date: Date): Date {
    return add(date, { months: 1 });
  }
  getPrevDate(date: Date): Date {
    return sub(date, { months: 1 });
  }
  getTodayDate(): Date {
    return startOfMonth(new Date());
  }
  getDayNames() {
    return [];
  }
}
