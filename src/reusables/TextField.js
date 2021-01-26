import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

let checkUserEntry=()=>{
  // let acceptedForm = {@"^\d{10}$"
}
export default function BasicTextFields(props) {
  const [inputValidity, setCount] = useState(0);
  const classes = useStyles();
  const{handleOnChange} = props;
  return (
    <form className={classes.root} noValidate autoComplete="off" className={``} style={{marginBottom:20}}>
      {/* <TextField id="standard-basic" label="Standard" />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}
      <TextField    inputProps={{ pattern: "^\d{11}$" }} id="outlined-basic" label="Student Id" variant="outlined" onChange={(e)=>{
        handleOnChange(e)
        
        }} />
    </form>
  );
}
