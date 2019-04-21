import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import steps from '../steps.json';

const ProgressBar = (props) => {
  const MIN = 0;
  const MAX = steps.length;
  const normalise = value => (value - MIN) * 100 / (MAX - MIN);
  return (
    <React.Fragment>
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  );
};
export default ProgressBar;
