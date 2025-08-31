/** 
 * @component HideOnScroll
 * @returns {JSX.Element} component that hides content on scroll
 * 
 */
import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

function HideOnScroll({ children, window }) {
  // detects position to determine if content should be hidden
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    // slides content down (hides) when scrolling down shows when scrolling up
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll; 