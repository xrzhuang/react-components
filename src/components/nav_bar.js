import React from 'react';
// import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const NavBar = () => {
  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Dartmouth CS52 — 19S
          </Typography>
          <div className="menu">
            <Button color="inherit">About</Button>
            <Button color="inherit">Schedule</Button>
            <Button color="inherit">Assignments</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

// NavBar.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   classes: PropTypes.object.isRequired,
// };

export default NavBar;
