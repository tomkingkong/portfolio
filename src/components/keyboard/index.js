import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Key from '../Key';

const styles = {
  keyboard: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '600px',
    height: '200px',
    justifyContent: 'center'
  }
}

export default injectSheet(styles)(class Keyboard extends Component {
  
  displayKeyboard = () => {
    const qwerty = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    return qwerty.split('').map(char => <Key>{ char }</Key>);
  }
  
  render() {
    const { classes, children } = this.props;

    return (
      <div className={classes.keyboard}>
        { this.displayKeyboard() }
      </div>
    )
  }
});