import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ProgressBar from './progress_bar';
import AssignmentStepper from './assignment_stepper';
import assignments from '../assignments.json';


class CurrentAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1,
      expanded: false,
      currentAssignment: assignments[0],
    };
  }

  handleStepChange = (newStep) => {
    this.setState(state => ({
      activeStep: newStep,
    }));
  }

  handleExpandClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.root}>
        <CardHeader
          title={this.state.currentAssignment.title}
          subheader={this.state.currentAssignment.shortDescription}
        />
        <CardContent>
          <ProgressBar activeStep={this.state.activeStep} steps={this.state.currentAssignment.steps} />
          <div className={classes.descriptionContainer}>
            <p className={classes.longDescription}>{this.state.currentAssignment.longDescription}</p>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
          {this.state.expanded ? <AssignmentStepper activeStep={this.state.activeStep} steps={this.state.currentAssignment.steps} handleStepChange={this.handleStepChange} /> : null}
        </CardContent>
      </Card>
    );
  }
}

const styles = {
  root: {
    textAlign: 'center',
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
  longDescription: {
    maxWidth: '80%',
  },
};

export default withStyles(styles)(CurrentAssignment);
