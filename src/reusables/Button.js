import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Buttons(props) {
  console.log(props)
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Button variant="contained">Default</Button> */}
      <Button variant="contained" color="primary"  onClick={props.myFunctions()}>
        Verify Id
      </Button>
      {/* <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button> */}
    </div>
  );
}