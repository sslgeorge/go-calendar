import { DateDisplay } from './date-display';

export function CalendarHeader() {
  return (
    <>
      <DateDisplay date={new Date()} />
    </>
  );
}
