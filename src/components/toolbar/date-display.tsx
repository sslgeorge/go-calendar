import { useAppContext } from '../../contexts/app.context';
import { formatDisplay } from '../../core/date-helper';
import { useView } from '../../hooks/use-view';

type DateDisplayProps = {};

export function DateDisplay(props: DateDisplayProps) {
  const { header } = useView();

  return <span>{header.formattedDate}</span>;
}
