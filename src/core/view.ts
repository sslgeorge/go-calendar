export interface IView {
  getNextDate(date: Date): Date;
  getPrevDate(date: Date): Date;
  getTodayDate(): Date;
}

export class View {}
