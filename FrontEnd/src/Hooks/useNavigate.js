import { useContext } from 'react';
import NavigationContext from '../Contexts/NavigationContext.js';

function useNavigate() {
  const { setRenderComponent } = useContext(NavigationContext);
  const navigateTo = (componentName) => {
      setRenderComponent(componentName);

  };
  return navigateTo;
}
export default useNavigate;