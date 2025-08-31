/**
 * Footer component displays all of the copyrigh info
 * @component Footer
 * @returns {JSX.Element} just a footer with some copyright info
 */
import React from 'react';
import { Box, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const Footer = () => {
  return (
    // main footer container
    <Box
      sx={{
        margin: 1,
        flexGrow: 1,
        bgcolor: 'grey.900', 
        color: 'common.white', 
        py: 3,
        textAlign: 'center', 
        borderRadius: 3,
        mt: 'auto',
      }}
    >


      {/* copyright text */}
      <Typography variant="body2">
        &copy; {new Date().getFullYear()}  All rights reserved.
      </Typography>
      
      {/* support message */}
      <Typography variant="caption" sx={{ mt: 0.5, display: 'block' }}>
        Designed to support your journey to recovery.
      </Typography>
    </Box>
  );
};

export default Footer;

