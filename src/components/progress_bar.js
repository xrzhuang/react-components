import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const ProgressBar = (props) => {
  // Declare important variables here

  return (
    // Create progress bar here
    <p>Delete me when you you make progress bar!</p>
  );
};

const styles = {
  progressBar: {
    background: '#babed6',
    borderRadius: 3,
    height: 10,
    boxShadow: '0 3px 5px 2px rgba(25, 33, 109, .3)',
  },
};

export default withStyles(styles)(ProgressBar);
