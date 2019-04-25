import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PastAssignment from './components/past_assignment';
import './style.scss';
import NavBar from './components/nav_bar';
import CurrentAssignment from './components/current_assignment';
import assignments from './assignments.json';
import AlertDialog from './components/Fab';

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
        <NavBar />
        <CurrentAssignment assignment={assignments[this.state.currentAssignment]} />
        {pastAssignments}
        <AlertDialog />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
