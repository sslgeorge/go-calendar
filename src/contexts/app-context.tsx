import { ComponentChildren, createContext } from 'preact';
import { useContext, useState } from 'preact/hooks';

type AppProviderProps = {
  children: ComponentChildren;
  date: Date;
};

type AppContextType = {
  date: Date;
  setDate: (date: Date) => void;
};

const AppContext = createContext<Partial<AppContextType>>({});

export function useAppContext() {
  return useContext(AppContext);
}

export function AppProvider(props: AppProviderProps) {
  const { children, date: defaultDate } = props;
  const [date, setDate] = useState(defaultDate);

  return (
    <AppContext.Provider value={{ date, setDate }}>
      {children}
    </AppContext.Provider>
  );
}
