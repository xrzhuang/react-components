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
      this.setState();
    }

    render() {
      return (
        <div>
          <AssignmentStepper activeStep={this.state.activeStep} />
        </div>
      );
    }
}

export default CurrentAssignment;
