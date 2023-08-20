import { useContext } from 'preact/hooks';
import { ViewContext } from '../contexts/view.context';

export function useView() {
  const context = useContext(ViewContext);

  if (!context) {
    throw new Error('useView must be used within a ViewProvider');
  }

  return context;
}
