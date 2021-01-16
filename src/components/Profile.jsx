import React from 'react';
import {createUseStyles} from 'react-jss';
import Posts from './Posts';
import ProfileInfo from './ProfileInfo';

const useStyles = createUseStyles ({ 
  contentHero: {
    height: '300px',

    '& img': {
      maxHeight: '100%',
      width: '100%'
    } 
  },
})

const Profile = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.profile}>      
      <ProfileInfo />
      <Posts posts={props.state.posts} addPost={props.addPost} />
    </div>
  );
}

export default Profile;