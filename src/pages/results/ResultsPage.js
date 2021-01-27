import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import ResultCard from '../../reusables/ResultCard'
import userProfile from "../resources/images/profile.jpg";
import { Avatar, ButtonBase} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ClassIcon from '@material-ui/icons/Class';
import CircularLoader from "../../reusables/CircularLoader"
import axios from "axios"
const drawerWidth = 240;
const contestants = [
  {
      name:"Assan Ewudzi Nathaniel",
      house:"Atta Mill House",
      class:"2A4-Gold",
      imageUrl:userProfile
  },
  {
      name:"Mr Eugen Nunoo",
      house:"LiGard House",
      class:"2A2-Gold",
      imageUrl:userProfile
  },
  {
      name:"Assan Ewudzi Nathaniel",
      house:"Atta Mill House",
      class:"2A4-Gold",
      imageUrl:userProfile
  },
  {
      name:"Mr Allah",
      house:"Eden House",
      class:"2A4-Gold",
      imageUrl:userProfile

  },
  {
      name:"Pamela Ribi",
      house:"AEN House",
      class:"2A4-Gold",
      imageUrl:userProfile

  },
  {
      name:"MisS Karen",
      house:"Salsa House",
      class:"2A4-Gold",
      imageUrl:userProfile

  },
  {
      name:"Sir Rudolph",
      house:"Ofosu House",
      class:"2A4-Gold",
      imageUrl:userProfile

  },
  {
      name:"Pamela Ribi",
      house:"AEN House",
      class:"2A4-Gold",
      imageUrl:userProfile

  },
  {
      name:"Assan Ewudzi Nathaniel",
      house:"Atta Mill House",
      class:"2A4-Gold",
      imageUrl:userProfile
  },
]

const useStyles = {
  root: {
    display: 'flex',
    flexFlow:'column'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  // toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    // padding: theme.spacing(3),
  },
}
const classes = useStyles;
class ResponsiveDrawer  extends Component {
  constructor(props) {
      super(props);
      this.state = { 
          loading:false,
          resultsList:[],
          activeGroup:0,
          selectedOption:"Boys Prefect",
       }
  }
  
 fetchResults(group){
   console.log(group)
   if(isNaN(group)){
      alert("Soriiii, this feature is still under develeopement")
   }
   else{
      this.setState({loading:true})
      axios.get(`https://murmuring-bastion-95773.herokuapp.com/api/contestants/${group}`)
      .then(resp => {
            this.setState({resultsList:resp.data.slice(0,5), loading:false})
      })
      .catch(err => {
          // Handle Error Here
          console.error(err);
      });
   }
 
 }
  ejectContestants(contestantResults){
    return contestantResults.map((contestant, index) => {
      return (
        <ResultCard key={index}  contestantId={`${index+1}`} contestant={contestant}/>
      );
    });
  }
  componentDidMount(){
    this.fetchResults(1);
}
  render() { 
  const MenuItems =[
    {
      title:"Boys Prefect",
      value:"Boys Prefect",
      label:"Boys Prefect",
      group:1,
    },
    {
      title:"Girls Prefect",
      value:"Girls Prefect",
      label:"Girls Prefect",
      group:2,
    },
    {
      title:"Sanctions Prefect",
      value:"Sanctions Prefect",
      label:"Sanctions Prefect",
      group:3,
    },
    {
      title:"Dinning Hall (East) Prefect",
      value:"Dinning Hall (East) Prefect",
      label:"Dinning Hall (East) Prefect",
      group:4,
    },
    {
      title:"Dinning Hall (West) Prefect",
      value:"Dinning Hall (West) Prefect",
      label:"Dinning Hall (West) Prefect",
      group:5,
    },

  ]
  
  const Options =[
    {
      title:"Bar Graph",
      action:"show-bar-graph",
    },
    {
      title:"Pie Chart",
      action:"show-pie-chart",
    },
    {
      title:"Histogram",
      action:"show-histogram",
    },
  ]
  
  return (
    <div style={{ display: 'flex', flexFlow:'column'}}>
      <CssBaseline />
      <AppBar position="relative" style={{width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,}}>
        <Toolbar>
          <Typography variant="h6" noWrap>
           {this.state.selectedOption}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={`d-flex j-start fill-entire-page`}>
        <main style={{width:"100%", height:"100vh", backgroundColour:"red"}} className={classes.content}>
          <div className={` padding-10-cent y-scroll d-flex f-column  j-start a-center height-100-cent width-100-cent nat-blue-bg grid-view`}>
          {this.state.loading ?<CircularLoader/> :this.ejectContestants(this.state.resultsList) }
          </div>
          
        </main>
        <Drawer
        style={{width: drawerWidth,flexShrink: 0,}}
        variant="permanent"
        
        anchor="right"
      >
        <div className={`${classes.toolbar}`} style={{position:"relative"}} />
        <Divider style={{marginTop:64}} />
        <List>
          {MenuItems.map((prefect, index) => (
            <ListItem button key={index} onClick = {()=>{
              this.setState({selectedOption:prefect.title})
              this.fetchResults(prefect.group)
              
              }}>
              <ListItemIcon>{index % 2 === 0 ? <RadioButtonCheckedIcon/> : <RadioButtonCheckedIcon />}</ListItemIcon>
              <ListItemText primary={prefect.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {Options.map((prefect, index) => (
            <ListItem button key={index}  onClick = {()=>{this.fetchResults(prefect.action)}}>
              <ListItemIcon>{index % 2 === 0 ? <RadioButtonCheckedIcon/> : <RadioButtonCheckedIcon />}</ListItemIcon>
              <ListItemText primary={prefect.title} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      </div>
    </div>
  );
}
}
export default ResponsiveDrawer