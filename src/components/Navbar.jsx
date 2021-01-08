import React from 'react';
import {createUseStyles} from 'react-jss';
import { NavLink } from 'react-router-dom';

const useStyles = createUseStyles ({
  nav: {
    gridArea: 'n',
    backgroundColor: 'burlywood',

    '& ul': {
      listStyle: 'none',
      paddingLeft: '10px',
    },

    '& li a': {
      color: 'white',
      textDecoration: 'none',

      '&.active': {
        color: 'red'
      }
    }
  },
   
})

const Navbar = () => {
  const classes = useStyles()

  return (
    <nav className={classes.nav}>
      <ul>
        <li className={classes.navItem}>
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to="/dialogs">Messages</NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to="/news">News</NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li className={classes.navItem}>
          <NavLink to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;