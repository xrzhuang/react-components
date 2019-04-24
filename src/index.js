import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import CurrentAssignment from './components/current_assignment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <CurrentAssignment />;
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
