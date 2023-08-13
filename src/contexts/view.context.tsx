import { createContext } from 'preact';
import { ViewContextType, ViewProps, ViewType } from './types';
import { useContext, useState } from 'preact/hooks';
import { IView } from '../core/view';
import { DayView } from '../core/day-view';
import { MonthView } from '../core/month-view';
import { WeekView } from '../core/week-view';
import { useAppContext } from './app.context';

const viewMaps = {
  [ViewType.DAY]: new DayView(),
  [ViewType.WEEK]: new WeekView(),
  [ViewType.MONTH]: new MonthView(),
};

export const ViewContext = createContext<ViewContextType>(undefined);

export function ViewProvider(props: ViewProps) {
  const { children } = props;

  const { viewType } = useAppContext();
  const [currentView, setCurrentView] = useState<IView>(viewMaps[viewType]);

  const handleSetCurrentView = (vt: ViewType) => {
    setCurrentView(viewMaps[vt]);
  };

  return (
    <ViewContext.Provider
      value={{
        view: currentView,
        setView: handleSetCurrentView,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);

  if (!context) {
    throw new Error('useView must be used within a ViewProvider');
  }

  return context;
}
