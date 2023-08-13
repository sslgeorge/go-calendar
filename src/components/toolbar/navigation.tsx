import { useAppContext } from '../../contexts/app.context';
import { useView } from '../../contexts/view.context';
import { getNextDay, getPreviousDay, getToday } from '../../core/date-helper';
import { ButtonGroup, Button } from './toolbar.styles';

export function Navigation() {
  const { date, setDate } = useAppContext();
  const { view } = useView();

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
