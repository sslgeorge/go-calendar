import { ComponentChildren, FunctionComponent } from 'preact';

type Day = {
  day: number;
  label: number;
};

export interface IView {
  getNextDate(date: Date): Date;
  getPrevDate(date: Date): Date;
  getTodayDate(): Date;
  getComponent(): FunctionComponent;
  getDayNames(): Day[];
}

export class View {}
