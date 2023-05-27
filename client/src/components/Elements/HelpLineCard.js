import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Card from '@mui/material/Card';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: '#F5F5F5',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    borderRadius: '8px',
  },
  title: {
    fontSize: '1.8rem',
    textAlign: 'center',
    color: '#18344A',
    marginBottom: '10px',
  },
  text: {
    fontSize: '1.5rem',
    color: '#18344A',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
    fontSize: '1.8rem',
  }
}));

export default function HelpCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <Typography className={classes.title}>
          Suicide Prevention Hotline
        </Typography>
        <Typography className={classes.text}>
          <LocalPhoneIcon className={classes.icon} />
          800-273-8255
        </Typography>
      </Card>
      <Card className={classes.card}>
        <Typography className={classes.title}>
          National Alliance For Mental Health Hotline
        </Typography>
        <Typography className={classes.text}>
          <LocalPhoneIcon className={classes.icon} />
          800-950-NAMI (6264)
        </Typography>
      </Card>
      <Card className={classes.card}>
        <Typography className={classes.title}>
          Substance Abuse and Mental Health Services Agency (SAMHSA)
        </Typography>
        <Typography className={classes.text}>
          <LocalPhoneIcon className={classes.icon} />
          800-662-HELP (4357)
        </Typography>
      </Card>
    </>
  );
}
