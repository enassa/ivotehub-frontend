import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import userProfile from "../pages/resources/images/profile.jpg"
import { Avatar } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight:200,
  },
  media: {
    height: 140,
  },
});

export default function UserCard(props) {
  const classes = useStyles();
  const {handleOnClick} = props;
  // console.log(props)
  return (
  <div onClick={()=>handleOnClick(props.contestant.id, props.contestant.group)} id={props.contestantId} className={`cursor-pointer elevated-card curved-corners nate-white-bg j-center a-center margin-t-10 margin-r-30  padding-auto  min-width-200 min-height-200`}>
      <ButtonBase style={{width:250, height:350}}>
              <div className={`d-flex f-column j-start a-center width-100-cent height-90-cent   curved-corners nate-white-bg `}>
                  <div className={` elevated-all round-up wrap-around margin-b-10`} >
                      <Avatar alt={props.contestant.name} src={props.contestant.image_url} style={{width:150, height:150, }} />
                  </div>
                  <div className={` d-flex f-column j-center a-center full-width full-height `}>
                      <span className={`text-info-holder margin-b-5`}><AccountCircleIcon style={{fill: "#1976D2", marginRight:3}}/>
                          {props.contestant.name} 
                      </span>
                      <span className={`text-info-holder margin-b-5`}><HomeIcon style={{fill: "#1976D2",marginRight:3}}/>
                          {props.contestant.house}
                      </span>
                      <span className={`text-info-holder`}><ClassIcon style={{fill: "#1976D2",marginRight:3}}/>
                          {`${props.contestant.current_class}`}
                      </span>
                  </div>
              </div>
      </ButtonBase>
  </div>
  );
}