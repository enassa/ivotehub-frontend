import { Avatar, ButtonBase} from '@material-ui/core';
import React, { Component } from 'react';
import userProfile from "../resources/images/profile.jpg";
import MyStepper from "../../reusables/MyStepper";
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import {connect} from "react-redux"
import UserCard from "../../reusables/UserCard"
import CircularLoader from "../../reusables/CircularLoader"
// import SomeCard from '../../reusables/Usercard';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import SimpleBackdrop from '../../reusables/Backdrop';
import axios from "axios";

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

class StudentDetails  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                contestantsLists:[],
                loading:false,
                activatedOption:0,
                votes:[],
                currentEndPoint:1,
                votesLength:0,
                numberOfVotes:5
         };
    }
     ejectContestants(contestantObject){
        return contestantObject.map((contestant, index) => {
          return (<UserCard key={index}  handleOnClick={(vote,voteGroup)=>{this.registerVote(vote,voteGroup)}}  contestantId={`${index}-${index}`} contestant={contestant} />);
        // console.log(contestant);
        });
      };
      getData(){
        this.setState({loading:true})
        axios.get(`https://murmuring-bastion-95773.herokuapp.com/api/contestants/${this.state.currentEndPoint}`)
               .then(resp => {
                     this.setState({contestantsLists:resp.data.slice(0,5), loading:false})
                    //  this.setState({activatedOption:this.state.activatedOption + 1})
                    //  this.setState({currentEndPoint:this.state.currentEndPoint + 1})
                     console.log("acti",this.state.activatedOption)
               })
               .catch(err => {
                   // Handle Error Here
                   console.error(err);
               });
    }
    sendVotes(){
        this.setState({votesLength:this.state.votesLength-1}, ()=>{
            axios.put(`https://murmuring-bastion-95773.herokuapp.com/api/contestants/${this.state.currentEndPoint}`)
               .then(resp => {
                    this.getData();
                    console.log(resp)
               })
               .catch(err => {
                   // Handle Error Here
                   console.error(err);
               });
        })
    }
    // processVotes(vote, voteGroup){
        // var voteString = JSON.stringify(this.state.votes);
        // console.log(voteString)
        // axios.put(`http://localhost:8000/api/contestants/${vote}`)
        // .then(resp => {
            //  if(resp.status == 200){

            //  }
            //  window.location.replace("http://localhost:8000/hh4534h5g4")
        // })
        // .catch(err => {
            // Handle Error Here
            // console.error(err);
        // });
        // console.log(this.state.votes)
        // let votesHolder = this.state.votes;
        // this.setState({votesLength:votesHolder.length}, ()=>{
        //     this.sendVotes();
        // })
    // }
    // saveVote(vote, voteGroup){
        // if(this.state.activatedOption==4){
        //     this.setState({
        //         votes:[...this.state.votes, vote]},
        //         (vote)=>{
        //         this.processVotes();
            
        //     } )
        // }
        // else{
        //     this.setState({
        //         votes:[...this.state.votes, vote]
        //     },(vote)=>{this.getData()} )
        // }
        // this.processVotes(vote,voteGroup)
    // }
    registerVote(contestantsId,voteGroup){
        // console.log(contestantsId,voteGroup)
            axios.put(`https://murmuring-bastion-95773.herokuapp.com/api/contestants/${contestantsId}`)
               .then(resp => {
                   if(resp.status == 200){
                    this.setState({activatedOption:this.state.activatedOption + 1}, ()=>{
                        this.setState({currentEndPoint:this.state.currentEndPoint + 1}, ()=>{
                            if(this.state.numberOfVotes==1){
                                window.location.replace("https://desolate-eyrie-58648.herokuapp.com/")
                            }
                            else{
                                this.setState({numberOfVotes:this.state.numberOfVotes-1}, ()=>{
                                    console.log(resp)
                                    this.getData()
                                    
                                })
                            }
                        })
                    })
                   }
               })
               .catch(err => {
                   // Handle Error Here
                   console.error(err);
               });
    }
    componentDidMount(){
         console.log(localStorage.verificationStatus)
        //  localStorage.verificationStatus = false;
        if(localStorage.verificationStatus=="yes"){
            this.getData()
          }
          else{
            window.location.replace("https://desolate-eyrie-58648.herokuapp.com/")
          }
    }
    render() { 
        return ( 
            <div className={`fill-entire-page d-flex j-space-around f-column a-center`}>
                {/* <SimpleBackdrop/> */}
                <MyStepper activeOption={this.state.activatedOption} />
                 <div className={` y-scroll d-flex f-column  j-start a-center height-70-cent width-90-cent elevated-all nat-blue-bg`} >
                    <div className={`margin-t-5 grid-view-no-scroll width-95-cent d-flex f-column  j-start a-start full-height`}>
                        {this.state.loading ?<CircularLoader/> :this.ejectContestants(this.state.contestantsLists) }
                    </div>
                </div>
            </div>
         );
    }
}
 
export default StudentDetails
