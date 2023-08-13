import { Toolbar } from './toolbar/toolbar';
import GlobalStyle from './global.styles';
import { AppProvider } from '../contexts/app-context';

export function GoCalendar() {
  return (
    <AppProvider date={new Date()}>
      <GlobalStyle />
      <Toolbar date={new Date()} />
    </AppProvider>
  );
}