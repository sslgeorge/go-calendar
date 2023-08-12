import { ComponentChildren } from 'preact';
import { DateDisplay } from './date-display';
import {
  Button,
  ButtonGroup,
  ToolbarContainer,
  ToolbarSection,
} from './toolbar.styles';
import { Navigation } from './navigation';

type ToolbarProps = {
  start?: ComponentChildren;
  end?: ComponentChildren;
  center?: ComponentChildren;
  date: Date;
};

export function Toolbar(props: ToolbarProps) {
  const { date } = props;

  const defaultStart = [
    <ButtonGroup key="DefaultStart">
      <Button key="Month">Month</Button>
      <Button key="Week">Week</Button>
      <Button key="Day">Day</Button>
    </ButtonGroup>,
  ];

  const defaultEnd = [<Navigation key="Navigation" />];
  const defaultCenter = [<DateDisplay key="DateDisplay" />];

  const {
    start = defaultStart,
    end = defaultEnd,
    center = defaultCenter,
  } = props;

  return (
    <ToolbarContainer>
      <ToolbarSection>{start}</ToolbarSection>
      <ToolbarSection>{center}</ToolbarSection>
      <ToolbarSection>{end}</ToolbarSection>
    </ToolbarContainer>
  );
}
