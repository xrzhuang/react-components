import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeReviewCard from './components/pastAssignment';
import './style.scss';
import NavBar from './components/nav_bar';
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
        <NavBar />
        <CurrentAssignment />
        <RecipeReviewCard />
        <AlertDialog />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
