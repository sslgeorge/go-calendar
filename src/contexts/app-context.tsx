import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { formatDisplay } from '../core/date-helper';
import { AppContextType, AppProps, ViewType } from './types';
import { IView } from '../core/view';
import { DayView } from '../core/day-view';
import { WeekView } from '../core/week-view';
import { MonthView } from '../core/month-view';

const AppContext = createContext<Partial<AppContextType>>({});

const viewMaps = {
  [ViewType.DAY]: new DayView(),
  [ViewType.WEEK]: new WeekView(),
  [ViewType.MONTH]: new MonthView(),
};

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider(props: AppProps) {
  const {
    children,
    date: defaultDate = new Date(),
    titleFormat: defaultTitleFormat = 'do-MMM-yyyy',
    view: defaultViewType = ViewType.MONTH,
  } = props;

  const [date, setDate] = useState(defaultDate);
  const [titleFormat, setTitleFormat] = useState(defaultTitleFormat);
  const [view, setView] = useState<IView>(viewMaps[defaultViewType]);

  const handleSetView = (type: ViewType) => {
    setView(viewMaps[type]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        view,
        date,
        setDate,
        setTitleFormat,
        titleFormat,
        setView: handleSetView,
        formattedDate: formatDisplay(date, titleFormat),
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
