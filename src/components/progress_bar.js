import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

const ProgressBar = (props) => {
  const MIN = 0;
  const MAX = props.steps.length;
  const normalise = activeStep => (activeStep - MIN) * 100 / (MAX - MIN);
  const { classes } = props;

  return (
    <React.Fragment>
      <LinearProgress className={classes.progressBar} variant="determinate" value={normalise(props.activeStep)} />
    </React.Fragment>
  );
};

const styles = {
  progressBar: {
    // background: 'linear-gradient(45deg, #838aaf 30%, #FF8E53 90%)',
    background: '#babed6',
    borderRadius: 3,
    height: 10,
    boxShadow: '0 3px 5px 2px rgba(25, 33, 109, .3)',
  },
};

export default withStyles(styles)(ProgressBar);
