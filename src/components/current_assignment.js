import React, { Component } from 'react';
import AssignmentStepper from './assignment_stepper';

class CurrentAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
    };
  }

    handleStepChange = (newStep) => {
      this.setState(state => ({
        activeStep: newStep,
      }));
    }

    render() {
      return (
        <div>
          <AssignmentStepper activeStep={this.state.activeStep} handleStepChange={this.handleStepChange} />
        </div>
      );
    }
}

export default CurrentAssignment;
