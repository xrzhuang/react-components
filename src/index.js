import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeReviewCard from './components/pastAssignment';
import './style.scss';
import CurrentAssignment from './components/current_assignment';
import AlertDialog from './components/Fab';

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
        <AlertDialog />
      </div>
    );
  }
}

// RecipeReviewCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

ReactDOM.render(<App />, document.getElementById('main'));
