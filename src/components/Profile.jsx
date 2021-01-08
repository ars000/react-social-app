import React from 'react';
import {createUseStyles} from 'react-jss';
import Post from './Post';

const useStyles = createUseStyles ({ 
  contentHero: {
    height: '300px',

    '& img': {
      maxHeight: '100%',
      width: '100%'
    } 
  },
  posts: {
    border: '1px solid red',
  }
})

const Profile = () => {
  const classes = useStyles()

  return (
    <div className={classes.profile}>
      <div className={classes.contentHero}>
        <img src="https://wall-photo.ru/wp-content/uploads/2018/09/screenshot-2458.jpg" alt="" />
      </div>
      <div>
        Ava + description
      </div>
      <div className={classes.posts}>
        <h2>Posts</h2>
        <Post message="Hi, how are you?" likes="15" />
        <Post message="It's me first post" likes="20" />
        <Post message="message 3" likes="3" />
        <Post message="message 4" likes="4" />
      </div>
    </div>
  );
}

export default Profile;