// My text
import React from 'react';
import logo from './../logo.svg';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles ({
  header: {
    gridArea: 'h',
    backgroundColor: 'green',

    '& img': {
      width: '40px',
    }
  }  
})

const Header = () => {
  const classes = useStyles()

  return(
      <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" />
    </header>
  );
}

export default Header;