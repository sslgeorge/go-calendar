import { IView } from '../core/view';
import { createContext } from 'preact';
import { DayView } from '../core/day-view';
import { WeekView } from '../core/week-view';
import { useAppContext } from './app.context';
import { MonthView } from '../core/month-view';
import { useContext, useState } from 'preact/hooks';
import { ViewProps, ViewType } from './types';
import { format } from 'date-fns';

export type ViewContextType = {
  view: IView;
  viewType: ViewType;
  date: Date;
  header: {
    formattedDate: string;
  };
  setView: (view: ViewType) => void;
  setDate: (date: Date) => void;
};

const viewMaps = {
  [ViewType.DAY]: new DayView(),
  [ViewType.WEEK]: new WeekView(),
  [ViewType.MONTH]: new MonthView(),
};

export const ViewContext = createContext<ViewContextType>(undefined);

export function ViewProvider(props: ViewProps) {
  const { children } = props;
  const { view: defaultViewType, isoDateValue, header } = useAppContext();
  const [currentView, setCurrentView] = useState<ViewType>(defaultViewType);
  const [date, setDate] = useState<Date>(new Date(isoDateValue.toString()));

  return (
    <ViewContext.Provider
      value={{
        date,
        setDate,
        viewType: currentView,
        view: viewMaps[currentView],
        setView: setCurrentView,
        header: {
          formattedDate: format(date, header.format),
        },
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}
