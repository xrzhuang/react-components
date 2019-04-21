import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import CurrentAssignment from './components/current_assignment';

const App = () => <CurrentAssignment />;

ReactDOM.render(<App />, document.getElementById('main'));
