import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  block: {
    display: 'block',
    width: 10,
    height: 10,
    background: 'cadetblue',
    transition: 'boxShadow 0.5s ease-in-out, background 0.5s ease-in-out',
    '&:hover': {
      background: 'deeppink',
      boxShadow: '0 1px 1px #777',
      zIndex: 10,
      transition: 'none',
    }
  }
}

const Block = ({ classes, children }) => (
  <div className={classes.block}>
    { children }
  </div>
)

export default injectSheet(styles)(Block);