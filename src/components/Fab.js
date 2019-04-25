import React from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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


    handleClickOpen = () => {
      this.setState({ open: true });
    };

    handleClose = (value) => {
      this.setState({ open: false });
    };

    render() {
      return (
        <div>
          <Fab
            variant="large"
            onClick={this.handleClickOpen}
            id="button"
            color="primary"
            position="right-bottom"
            style={style}
          >
          Call Tim
          </Fab>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">Need Help?</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
              I would suggest calling him.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
              not helpful
              </Button>
              <Button onClick={this.handleClose} color="primary" autoFocus>
              SOS
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
}

export default withStyles(style)(AlertDialog);
