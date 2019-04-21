import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import ProgressBar from './components/progressbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ProgressBar value={2} />
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
