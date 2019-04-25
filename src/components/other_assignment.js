// insert imports here

// insert card component here

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
