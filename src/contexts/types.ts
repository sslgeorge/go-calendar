import { ComponentChildren } from 'preact';
import { IView, View } from '../core/view';

export enum ViewType {
  YEAR = 'year',
  MONTH = 'month',
  WEEK = 'week',
  DAY = 'day',
}

export type AppProps = {
  date: Date;
  children: ComponentChildren;
  titleFormat?: string;
  view?: ViewType;
};

export type AppContextType = {
  date: Date;
  view: IView;
  titleFormat?: string;
  formattedDate: string;
  viewType: ViewType;
  setDate: (date: Date) => void;
  setView: (view: ViewType) => void;
  setTitleFormat: (format: string) => void;
};

export type ViewProps = {
  children: ComponentChildren;
};

export type ViewContextType = {
  view: IView;
  setView: (view: ViewType) => void;
};
