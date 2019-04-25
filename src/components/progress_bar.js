import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const ProgressBar = (props) => {
  const MIN = 0;
  const MAX = props.steps.length;
  const normalise = activeStep => (activeStep - MIN) * 100 / (MAX - MIN);
  return (
    <React.Fragment>
      <LinearProgress className={props.classes.progressBar} variant="determinate" value={normalise(props.activeStep)} />
    </React.Fragment>
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
