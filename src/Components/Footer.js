import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <script src="https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js"></script>
      <script src="https://unpkg.com/@emotion/react@latest/umd/emotion-react.production.min.js"></script>
      <script src="https://unpkg.com/@emotion/styled@latest/umd/emotion-styled.production.min.js"></script>
      <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@mui/icons-material@latest/umd/material-ui-icons.production.min.js"></script>

      <Typography variant="body2">
        &copy; {new Date().getFullYear()}  All rights reserved.
      </Typography>
      <Typography variant="caption" sx={{ mt: 0.5, display: 'block' }}>
        Designed to support your journey to recovery.
      </Typography>
    </Box>
  );
};

export default Footer;

