type DateDisplayProps = {
  date: Date;
};

export function DateDisplay(props: DateDisplayProps) {
  const { date } = props;

  return <span>{date.toLocaleDateString()}</span>;
}
