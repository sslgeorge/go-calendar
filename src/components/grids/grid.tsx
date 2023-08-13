import { useView } from '../../contexts/view.context';

export function Grid() {
  const { view } = useView();
  const { getComponent } = view;

  const Component = getComponent();

  return <Component />;
}
