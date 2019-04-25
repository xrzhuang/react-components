import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/button';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          // avatar={(
          //   <Avatar aria-label="Recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // )}
          // action={(
          //   <IconButton>
          //     <MoreVertIcon />
          //   </IconButton>
          // )}
          title="Lab 1"
          subheader="April 6, 2019"
        />
        <CardMedia
          className={classes.media}
          image="src/img/lab1.png"
          title="Lab1"
        />
        <CardContent>
          <Typography component="p">
          Your assignment, should you choose to accept it, (not sure you have much choice there…) is to create a landing page.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          {/* <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton> */}
          <Button size="small" href="http://cs52.me/assignments/lab/landing-page/">View</Button>
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
            A landing page you say? Yes, you will be making a landing page based on an real page out there in the world.
            You will be mimicking the structure and style of a page but with your own content.
            </Typography>
            <Typography paragraph>
            Become comfortable with Chrome DevTools, Be able to mimic structure and style of pages, Focus on refining html/css skills, Build a beautiful static landing page.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

// RecipeReviewCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(RecipeReviewCard);
