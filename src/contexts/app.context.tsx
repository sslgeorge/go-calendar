import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import { AppProps, ViewType } from './types';
import { ViewProvider } from './view.context';
import { ISODateValue } from '../core/iso-date-value';

type AppContextType = {
  isoDateValue: ISODateValue;
  view?: ViewType;
  header?: {
    format: string;
  };
};

const AppContext = createContext<AppContextType>({
  isoDateValue: new ISODateValue(new Date().toISOString()),
  header: {
    format: 'do-MMM-yyyy',
  },
});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider(props: AppProps) {
  const {
    children,
    date: defaultDateString,
    header = {
      format: 'do-MMM-yyyy',
    },
    view = ViewType.MONTH,
  } = props;

  const isoDateValue = new ISODateValue(defaultDateString);

  return (
    <AppContext.Provider
      value={{
        isoDateValue,
        header,
        view,
      }}
    >
      <ViewProvider>{children}</ViewProvider>
    </AppContext.Provider>
  );
}
