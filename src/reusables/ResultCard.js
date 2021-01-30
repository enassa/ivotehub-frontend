import React, {Component} from 'react';
import { Avatar } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
import userProfile from "../pages/resources/images/profile.jpg"



class ResultsCard extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          verifying:false,
       }
  }
  render(){
  const {contestant,contestantId} = this.props;
  return (
     
    <div id={contestant.id} className={`d-flex f-row j-start a-center width-100-cent height-200 margin-b-50   curved-corners  `}>
            
    <div className={`d-flex f-column j-start a-center width-500 height-200 elevated-all  curved-corners nate-white-bg `}>
      <ButtonBase style={{width:"100%", height:"100%", borderRadius:10}}>
            <div className={` elevated-all round-up wrap-around margin-l-20 margin-r-30`} >
                <Avatar alt={contestant.name} src={contestant.image_url} style={{width:150, height:150, }} />
            </div>
            <div className={` d-flex f-column j-center a-start full-width full-height `}>
                <span className={`text-info-holder margin-b-5`}><AccountCircleIcon style={{fill: "#1976D2", marginRight:3}}/>
                    {contestant.name} 
                </span>
                <span className={`text-info-holder margin-b-5`}><HomeIcon style={{fill: "#1976D2",marginRight:3}}/>
                    {contestant.house}
                </span>
                <span className={`text-info-holder`}><ClassIcon style={{fill: "#1976D2",marginRight:3}}/>
                    {contestant.current_class}
                </span>
            </div>
        </ButtonBase>
      </div>
    <div  className={`d-flex f-column j-space-between  a-start full-height margin-l-30`}>
        <span  className={`hide-visible padding-l-20 elevated-card text-info-holder min-width-200 min-height-50`}>{`Position: N/A`}</span>
        <span  className={` padding-l-20 elevated-card text-info-holder min-width-200 min-height-50`}>{`Total Votes: ${contestant.votes}`}</span>
        <span  className={`hide-visible padding-l-20 elevated-card text-info-holder min-width-200 min-height-50`}>{` N/A`}</span>
    </div>
</div>
    )
  }
}
export default ResultsCard;