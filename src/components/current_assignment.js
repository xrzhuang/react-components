import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

class CurrentAssignment extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      activeStep: 1,
      expanded: false,
    };
  }

  // handlers will go here

  render() {
    return (
      // 
      <div/>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px',
    width: '60%',
  },
  media: {
    height: 0,
    paddingTop: '40%',
    backgroundSize: 'cover',
  },
  expand: {
    marginLeft: 5,
  },
  expandOpen: {
    marginLeft: 5,
    transform: 'rotate(180deg)',
  },
  descriptionContainer: {
    marignTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    maxWidth: '80%',
  },
};

export default withStyles(styles)(CurrentAssignment);
