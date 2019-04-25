import React, { Component } from 'react';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardMedia from '@material-ui/core/CardMedia';
import ProgressBar from './progress_bar';
import AssignmentStepper from './assignment_stepper';

class CurrentAssignment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 1,
      expanded: false,
    };
  }

  handleStepChange = (newStep) => {
    this.setState({
      activeStep: newStep,
    });
  }

  handleExpandClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded,
    }));
  }

  render() {
    const { classes } = this.props;
    const { assignment } = this.props;

    return (
      <Card className={classes.root}>
        <CardHeader
          title="Current Assignment"
          subheader={assignment.title}
        />
        <CardMedia
          className={classes.media}
          image={assignment.image}
          title={assignment.title}
        />
        <CardContent>
          <ProgressBar activeStep={this.state.activeStep} steps={assignment.steps} />
          <div className={classes.descriptionContainer}>
            <p className={classes.description}>{assignment.description.long}</p>
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
          {this.state.expanded ? <AssignmentStepper activeStep={this.state.activeStep} steps={assignment.steps} handleStepChange={this.handleStepChange} /> : null}
        </CardContent>
      </Card>
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

// needed to override styles
export default withStyles(styles)(CurrentAssignment);
