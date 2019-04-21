import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeReviewCard from './components/pastAssignment';
// import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      no: false,
    };
  }

  render() {
    return (
      <RecipeReviewCard />
    );
  }
}

// RecipeReviewCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

ReactDOM.render(<RecipeReviewCard />, document.getElementById('main'));
// export default withStyles(styles)(RecipeReviewCard);
