import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Avatar, Typography } from '@material-ui/core';
import Thankyou from "./thankyou.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    height: 180,
  },
  container: {
    display: 'flex',
    minHeight:"800px"
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SimpleGrow() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);


  
  const handleChange = () => {
    setTimeout(()=>{
        window.location.replace("https://ivotehub-frontend.web.app")
    },3000)
  };

  return (
    <div  className={` height-full width-full fill-entire-page d-flex j-center a-center`}>
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />} 
        label="Show"
      /> */}
      <div  className={`height-full width-full fill-entire-page d-flex j-center a-center`}>
        {/* <Grow style={{backgroundColor:"blue"}} className={`nate-blue-bg fill-entire-page  height-full width-full d-flex j-center a-center`} in={checked}> */}
             <img src={Thankyou} style={{borderRadius:20, width:"50%", height:"50%"}}/>
             {handleChange()}
        {/* </Grow> */}
        {/* Conditionally applies the timeout prop to change the entry speed. */}
      </div>
    </div>
  );
}