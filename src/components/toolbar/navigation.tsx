import { useAppContext } from '../../contexts/app.context';
import { getNextDay, getPreviousDay, getToday } from '../../core/date-helper';
import { ButtonGroup, Button } from './toolbar.styles';

export function Navigation() {
  const { date, setDate, view } = useAppContext();

  const handleToday = () => {
    setDate(getToday());
  };

  const handlePrevious = () => {
    const day = getNextDay(date);
    setDate(day);
  };

  const handleNext = () => {
    const day = getPreviousDay(date);
    setDate(day);
  };

  return (
    <ButtonGroup>
      <Button key="Previous" onClick={handlePrevious}>
        Previous
      </Button>
      <Button key="Today" onClick={handleToday}>
        Today
      </Button>
      <Button key="Next" onClick={handleNext}>
        Next
      </Button>
    </ButtonGroup>
  );
}
