import { useAppContext } from '../../contexts/app-context';

type DateDisplayProps = {};

export function DateDisplay(props: DateDisplayProps) {
  const { date } = useAppContext();

  return <span>{date.toLocaleDateString()}</span>;
}
