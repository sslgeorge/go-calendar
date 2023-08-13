import { ComponentChildren, FunctionComponent } from 'preact';

export interface IView {
  getNextDate(date: Date): Date;
  getPrevDate(date: Date): Date;
  getTodayDate(): Date;
  getComponent(): FunctionComponent;
}

export class View {}
