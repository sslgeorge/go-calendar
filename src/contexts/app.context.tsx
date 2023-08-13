import { createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';
import { AppContextType, AppProps, ViewType } from './types';
import { formatDisplay } from '../core/date-helper';
import { ViewProvider } from './view.context';

const AppContext = createContext<Partial<AppContextType>>({});

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

  return (
    <AppContext.Provider
      value={{
        date,
        setDate,
        setTitleFormat,
        titleFormat,
        viewType: defaultViewType,
        formattedDate: formatDisplay(date, titleFormat),
      }}
    >
      <ViewProvider>{children}</ViewProvider>
    </AppContext.Provider>
  );
}
