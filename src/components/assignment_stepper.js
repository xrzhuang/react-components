import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class AssignmentStepper extends Component {
  handleNext = () => {
    this.props.handleStepChange(this.props.activeStep + 1);
  };

  handleBack = () => {
    this.props.handleStepChange(this.props.activeStep - 1);
  };

  handleReset = () => {
    this.props.handleStepChange(0);
  };

  render() {
    const stepTitles = this.props.steps.map(step => step.title);
    const stepContent = this.props.steps.map(step => step.content);
    const { activeStep } = this.props;
    return (
      <div>
        <Stepper activeStep={activeStep} orientation="vertical">
          {stepTitles.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{stepContent[index]}</Typography>
                <div>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                    >
                     Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                    >
                      {activeStep === this.props.steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === this.props.steps.length && (
        <Paper square elevation={0}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={this.handleReset}>
             Reset
          </Button>
        </Paper>
        )}
      </div>
    );
  }
}

const styles = {
  stepContent: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
    marginBottom: 10,
    maxWidth: '80%',
  },
};

export default withStyles(styles)(AssignmentStepper);
