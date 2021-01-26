import React, { Component } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import StudentDetails from '../student-details/StudentDetails'
// import Verification from './pages/verification';
import ResponsiveDrawer from "../results/ResultsPage"
// import ResultsPage from '../results/Results';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            verificationState:true,
        };
  
}

    render() { 
        let getPAGE=()=>{
            const{match} = this.props
            let page = match.url;
            // console.log(page)
            switch(page){
                case "/some-student-details":
                    return <StudentDetails/>
                    break
                case "/hh454j5hg34h5g4":
                    return <StudentDetails/>
                    break
                case "/results-page":
                    return <ResponsiveDrawer/>
                    break
                case "/*":
                    console.log(page)
                    break
            }
        }
        return ( 
           <div className={`fill-entire-page`}>
              {getPAGE()}
           </div>
         );
    }
}
 
export default Home;