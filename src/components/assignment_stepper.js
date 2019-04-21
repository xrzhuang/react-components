/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import steps from '../steps.json';

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
    const stepTitles = steps.map(step => step.title);
    const stepContent = steps.map(step => step.content);
    const { activeStep } = this.props;

    return (
      <div className="root">
        <Stepper activeStep={activeStep} orientation="vertical">
          {stepTitles.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{stepContent[index]}</Typography>
                <div className="actionsContainer">
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className="actionButton"
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className="actionButton"
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className="resetContainer">
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={this.handleReset} className="actionButton">
              Reset
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

// AssignmentStepper.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   // eslint-disable-next-line react/require-default-props
//   classes: PropTypes.object,
// };

export default AssignmentStepper;
