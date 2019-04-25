
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
  width: '80px',
  height: '80px',
};

class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  render() {
    return (
      <div />
    );
  }
}

export default withStyles(style)(AlertDialog);
