import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props) {
  return (
    <Typography variant="body1" color="text.secondary" align="center" style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '20px' }} {...props}>
      {'Made By Izza Fatima for Final year project'}
      <Link color="inherit" href="/homepage">
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
