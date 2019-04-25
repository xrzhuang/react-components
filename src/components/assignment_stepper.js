import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class AssignmentStepper extends Component {
  render() {
    return (
      <div />
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
