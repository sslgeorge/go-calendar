import { Toolbar } from './toolbar/toolbar';
import GlobalStyle from './global.styles';
import { AppProvider } from '../contexts/app.context';
import { ViewProvider } from '../contexts/view.context';
import { Grid } from './grids/grid';

export function GoCalendar() {
  return (
    <AppProvider date={new Date().toISOString()}>
      <GlobalStyle />
      <Toolbar date={new Date()} />
      <Grid />
    </AppProvider>
  );
}
