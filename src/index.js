import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PastAssignment from './components/past_assignment';
import './style.scss';
import CurrentAssignment from './components/current_assignment';
import assignments from './assignments.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAssignment: 0,
    };
  }

  updateCurrentAssignment = (newCurrentAssignment) => {
    this.setState({
      currentAssignment: newCurrentAssignment,
    });
  }

  render() {
    const pastAssignments = assignments.map((assignment, index) => {
      return index !== this.state.currentAssignment && <PastAssignment key={assignment.title} assignment={assignment} setCurrentAssignment={this.updateCurrentAssignment} index={index} />;
    });

    return (
      <div>
        <CurrentAssignment assignment={assignments[this.state.currentAssignment]} />
        {pastAssignments}
      </div>
    );
  }
}

// RecipeReviewCard.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

ReactDOM.render(<App />, document.getElementById('main'));
// export default withStyles(styles)(RecipeReviewCard);
