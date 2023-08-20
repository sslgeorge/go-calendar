import { ComponentChildren } from 'preact';
import { IView, View } from '../core/view';

export enum ViewType {
  YEAR = 'year',
  MONTH = 'month',
  WEEK = 'week',
  DAY = 'day',
}

export type AppProps = {
  date: string;
  view?: ViewType;
  header?: {
    format: string;
  };
  footer?: {
    format: string;
  };
  children: ComponentChildren;
};

export type ViewProps = {
  children: ComponentChildren;
};
