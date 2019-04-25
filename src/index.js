import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeReviewCard from './components/pastAssignment';
// import PropTypes from 'prop-types';
import './style.scss';
import CurrentAssignment from './components/current_assignment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CurrentAssignment />
        <RecipeReviewCard />
      </div>
    );
  }
}

// RecipeReviewCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

ReactDOM.render(<App />, document.getElementById('main'));
// export default withStyles(styles)(RecipeReviewCard);
