import React from 'react';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles ({ 
  profileHero: {
    // height: '300px',

    '& img': {
      maxHeight: '100%',
      width: '100%'
    } 
  },
  profileDescription: {
    padding: '15px'
  }
})

const ProfileInfo = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.profileHero}>
        <img src="https://wall-photo.ru/wp-content/uploads/2018/09/screenshot-2458.jpg" alt="" />
      </div>
      <div className={classes.profileDescription}>
        Ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;