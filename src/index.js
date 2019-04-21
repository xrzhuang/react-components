import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import NavBar from './components/nav_bar';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div id="nav-bar"><NavBar /></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));


// const App = () => <div className="test">All the REACT are belong to us!</div>;

// ReactDOM.render(<App />, document.getElementById('main'));
