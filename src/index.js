import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RecipeReviewCard from './components/pastAssignment';
import './style.scss';
import NavBar from './components/nav_bar';
import CurrentAssignment from './components/current_assignment';

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
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
