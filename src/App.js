import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  hellothereStyle: {
    fontStyle: 'oblique'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Typography className={classes.hellothereStyle}>Hello My Friend</Typography>
      <Button color='primary'>First Button</Button>
    </div>
  );
}

export default App;
