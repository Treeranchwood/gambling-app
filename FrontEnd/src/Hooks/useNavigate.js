/**
 * Custom hook for navigation - builds on top of the navigation context to to automte it further
 */
import { useContext } from 'react';
import NavigationContext from '../Contexts/NavigationContext.js';

function useNavigate() {
  /** @type {Object} Navigation context with setRenderComponent function */
  const { setRenderComponent } = useContext(NavigationContext);
  
  /**
   * Navigates to specified component  
   * @param {string} componentName is the parameter to navigate to
   * @returns nothing - switches states
   */
  const navigateTo = (componentName) => {
      setRenderComponent(componentName);
  };
  
  return navigateTo;
}

export default useNavigate;