import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
    backgroundColor:"#DF184E",
    color:"white !important"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color:"white !important",
    width:"400px !important",
    
  },
}));

function getSteps() {
  return [
    'Boys Prefect', 
    'Girls Prefect', 
    'Entertainment Prefect',
    'Dinning Hall Boys (East and West)',
    'Dinning Hall Girls (East and West)',
    'Sanctions Prefect Boys (East and West)',
    'Sanctions Prefect Girls (East and West)',
    
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Choose your Boys Prefect';
      break;
    case 1:
      return 'Choose your Girls Prefect';
      break;
    case 2:
      return 'Choose your Entertainment Prefect';
      break;
    case 3:
      return 'Choose your Dinning Hall Boys Prefect';
      break;
    case 4:
      return 'Choose your Dinning Hall Girls Prefect';
      break;
    case 5:
      return 'Choose your Sanctions Boys Prefect';
      break;
    case 6:
      return 'Choose your Sanctions Girls Prefect';
      break;
    default:
      return '';
  }
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  // console.log(props)

  const handleNext = () => {
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
       setActiveStep(props.activeOption)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={props.activeOption} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={` d-flex j-center a-center bottom-0 full-width   height-20-cent`}>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions} style={{color:"white"}}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div  className={` padding-l-5-cent d-flex f-column j-center a-start full-width    `}>
            <div className={` d-flex j-center a-center nate-blue-4-bg padding-l-20 height-50 curved-corners-small elevated-card`}>
              <Typography style={{textAlign:"left", fontWeight:"bold"}} className={classes.instructions}>{getStepContent(props.activeOption)}</Typography>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
