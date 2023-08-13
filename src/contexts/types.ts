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
  viewType?: ViewType;
};

export type AppContextType = {
  date: Date;
  titleFormat?: string;
  formattedDate: string;
  viewType: ViewType;
  setDate: (date: Date) => void;
  setTitleFormat: (format: string) => void;
};

export type ViewProps = {
  children: ComponentChildren;
};

export type ViewContextType = {
  view: IView;
  viewType: ViewType;
  setView: (view: ViewType) => void;
};
