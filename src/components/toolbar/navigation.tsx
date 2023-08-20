import { getNextDay, getPreviousDay, getToday } from '../../core/date-helper';
import { useView } from '../../hooks/use-view';
import { ButtonGroup, Button } from './toolbar.styles';

export function Navigation() {
  const { date, view, setDate } = useView();

  const handleToday = () => {
    setDate(getToday());
  };

  const handlePrevious = () => {
    const day = getNextDay(date);
    setDate(day);
  };

  const handleNext = () => {
    const day = view.getNextDate(date);
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
