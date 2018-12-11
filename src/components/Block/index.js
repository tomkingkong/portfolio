import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  '@keyframes slideRight': {
    to: {transform: 'translate(0, 10px)'}
  },
  block: {
    display: 'block',
    width: 10,
    height: 10,
    background: 'cadetblue',
    transition: 'boxShadow 0.5s ease-in-out, background 0.5s ease-in-out, animation 5s linear',
    
    '&:hover': {
      animationName: 'slideRight',
      animationDuration: '0.5s',
      background: 'deeppink',
      boxShadow: '0 1px 1px #777',
      zIndex: 10,
      transition: 'none',
    },
  }
}



const Block = ({ classes, children }) => (
  <div className={classes.block}>
    { children }
  </div>
)

export default injectSheet(styles)(Block);