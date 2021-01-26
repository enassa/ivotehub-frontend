import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
      width:"100% !important",
      height:"100% !important",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    },
  },
}));

export default function CircularLoader() {
  const classes = useStyles();

  return (
    <div className={`fill-entire-page di-flex j-center a-center`}>
      <CircularProgress />
      {/* <CircularProgress color="secondary" /> */}
    </div>
  );
}