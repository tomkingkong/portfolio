import React, { Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  key: {
    background: '#f00',
    borderBottom: '20px outset #f00',
    borderRight: '6px outset #f88',
    borderLeft: '6px outset #f88',
    borderTop: '0px outset #f88',
    color: 'white',
    fontFamily: 'arial',
    fontSize: '140%',
    cursor: 'pointer',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    height: '40px',
    bottom: '-38px',
    margin: '0.2rem',
    perspective: '100px',
    transition: 'all 0.020s ease-in-out',
    transformStyle: 'preserve-3d',
    transform: 'rotateX(30deg)',
  },
  active: {
    width: '48px',
    height: '58px',
    background: '#c41919',
    borderBottom: '2px outset #f00',
    borderRight: '2px outset #f88',
    borderLeft: '2px outset #f88',
    borderTop: '0px outset #f88',
    color: 'white',
    fontFamily: 'arial',
    fontSize: '140%',
    cursor: 'pointer',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '-38px',
    margin: '0.2rem',
    perspective: '100px',
    transition: 'all 0.020s ease-in-out',
    transformStyle: 'preserve-3d',
    transform: 'rotateX(30deg)',
  }
}

export default injectSheet(styles)(class Key extends Component {
  constructor() {
    super();
    this.state = {
      isPressed: false
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.activate, false);
    document.addEventListener("keyup", this.activate, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keyup", this.activate, false);
    document.removeEventListener("keydown", this.activate, false);
  }

  activate = (event) => {
    const keyPress = event.keyCode;
    const thisKey = this.props.children.charCodeAt(0);

    if (keyPress === thisKey) {
      this.setState({ 
        isPressed: !this.state.isPressed
      });
    };
  }

  render() {
    const { classes, children } = this.props;
    const { isPressed } = this.state;
    const { active, key } = classes;
 
    return (
      <div 
        tabIndex="0"
        id={children.charCodeAt(0)}
        className={ isPressed ? active : key}
        onKeyDown={this.activate} 
        onKeyUp={this.activate}
        >
        { children } 
      </div>
    )
  }
});;
