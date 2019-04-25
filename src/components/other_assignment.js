import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

class OtherAssignment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  // insert functions here
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  setCurrentAssignment = () => {
    this.props.setCurrentAssignment(this.props.index);
  }

  render() {
    const { classes } = this.props;
    const { assignment } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title={assignment.title}
          subheader={assignment.date}
        />
        <CardMedia
          className={classes.media}
          image={assignment.image}
          title={assignment.title}
        />
        <CardContent>
          <Typography className={classes.short} component="p">
            {assignment.description.short}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Button size="small" href={assignment.link}>View</Button>
          <Button size="small" onClick={this.setCurrentAssignment}>Set To Current</Button>
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
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {assignment.description.long}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

const styles = theme => ({
  card: {
    width: '40%',
    marginBottom: '20px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default withStyles(styles)(OtherAssignment);
