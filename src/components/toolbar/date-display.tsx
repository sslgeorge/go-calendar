import { useAppContext } from '../../contexts/app.context';
import { formatDisplay } from '../../core/date-helper';

type DateDisplayProps = {};

export function DateDisplay(props: DateDisplayProps) {
  const { formattedDate } = useAppContext();

  return <span>{formattedDate}</span>;
}
