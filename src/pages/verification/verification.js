import React, { Component } from 'react';
import ImageInserter from '../../reusables/ImageInserter';
import someImage from '../resources/images/votea.jpg'
import BasicTextFields from '../../reusables/TextField';
// import Buttons from '../../reusables/Button'
import LinearIndeterminate from '../../reusables/Loader';
import Button from '@material-ui/core/Button';
import axios from "axios"

class Verification  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            verifying:false,
            userInputs:"",
         }
    }
    getUserInput(userId){
        // alert(userId)
        if(isNaN(userId.target.value)){
            alert("Invalid entry")
            this.setState({userInputs:""})
            userId.target.value="";
        }
        else{
            this.setState({userInputs:userId.target.value})
            console.log(userId.target.value)
            // console.log("state",this.state.userInputs)
        }
        
    }
    VerificationSuccess(){
        this.setState({verifying:false})
        localStorage.setItem('verificationStatus', "yes")
        console.log(localStorage.verificationStatus)
        window.location.replace("http://localhost:3000/hh454j5hg34h5g4")
    }
    verifying(){
        this.setState({verifying:true})
    }
    verifyUser(){
        console.log("state-Now",this.state.userInputs)
        console.log(this.state.userInputs)
        if(this.state.userInputs==""){
            alert("Please enter your voters Id")
        }else{
            this.verifying();
            let currentEndPoint = this.state.userInputs;
            axios.get(`http://localhost:8000/api/voters/${currentEndPoint}`)
            .then(resp => {
                if(resp.status==200){
                    this.VerificationSuccess()
                    console.log("verificaion succes")
                }
                else{
                    console.log("verificaion failed")
                }
                console.log(resp)
            })
            .catch(err => {
                // Handle Error Here
                console.error(err);
            });
        }
       
    }
    render() { 
        
        return ( 
            <div  className={`nate-white-bg d-flex f-column j-center a-center  fill-entire-page`}>
                <div className={`fill-container d-flex f-column j-start a-center width-70-cent height-70-cent  elevated-all`}>
                    {this.state.verifying?<LinearIndeterminate/>:null}
                    <div className={`fill-contianer d-flex full-height f-row j-center a-center overflow-hidden`}>
                        <div className={`half-width full-height d-flex f-column a-center j-center nate-white-bg`}>
                                <div className={`full-height padding-10-cent d-flex f-column a-center j-center`}>
                                    <BasicTextFields handleOnChange={(inputValue)=>{this.getUserInput(inputValue)}} />
                                    <Button variant="contained" color="primary"  onClick={()=>{this.verifyUser()}}>
                                        Verify Id
                                    </Button>
                                </div>
                            </div>
                            <div className={`half-width full-height nate-blue-4-bg overflow-hidden`}>
                                <ImageInserter classes={``} styles={{width:"100%", height:"100%"}} src={someImage}/>
                            </div>
                        </div> 
                    </div>
            </div>
         );
    }
}
 
export default Verification ;