type Day = {
  day: number;
  label: number;
};

export interface IView {
  getNextDate(date: Date): Date;
  getPrevDate(date: Date): Date;
  getTodayDate(): Date;
  getDayNames(): Day[];
}

export class View {}
