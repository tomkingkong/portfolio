import React from 'react';
import injectSheet from 'react-jss';
import Block from '../Block';

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 250,
    height: 250
  }
}

const blocks = Array
  .from(Array(2500))
  .map(() => <Block />)

export default injectSheet(styles)(({ classes }) => (
  <div className={classes.grid}>
    { blocks }
  </div>
));