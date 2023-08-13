import { ComponentChildren } from 'preact';
import { DateDisplay } from './date-display';
import { Navigation } from './navigation';
import {
  Button,
  ButtonGroup,
  ToolbarContainer,
  ToolbarSection,
} from './toolbar.styles';
import { useView } from '../../contexts/view.context';
import { ViewType } from '../../contexts/types';

type ToolbarProps = {
  start?: ComponentChildren;
  end?: ComponentChildren;
  center?: ComponentChildren;
  date: Date;
};

export function Toolbar(props: ToolbarProps) {
  const { setView } = useView();
  const defaultStart = [
    <ButtonGroup key="DefaultStart">
      <Button key="Month" onClick={() => setView(ViewType.MONTH)}>
        Month
      </Button>
      <Button key="Week" onClick={() => setView(ViewType.WEEK)}>
        Week
      </Button>
      <Button key="Day" onClick={() => setView(ViewType.DAY)}>
        Day
      </Button>
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
