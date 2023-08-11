import { render } from 'preact';
import { GoCalendar } from './components/go-calendar';

export function App() {
  return <GoCalendar />;
}

render(<App />, document.getElementById('app'));
