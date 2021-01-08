import React from 'react';
import {createUseStyles} from 'react-jss';
import Post from './Post';
import ProfileInfo from './ProfileInfo';

const useStyles = createUseStyles ({ 
  contentHero: {
    height: '300px',

    '& img': {
      maxHeight: '100%',
      width: '100%'
    } 
  },
  posts: {
    padding: '15px',
    border: '1px solid red',
  },
  title: {
    margin: '0 0 15px'
  },
  postFormWrap: {
    paddingBottom: '15px',

    '& textarea': {
      width: '300px',
      height: '80px'
    }
  }
})

const Profile = () => {
  const classes = useStyles()

  let postData = [
    {id: 1, message: 'Hi, how are you?', likesCount: '15'},
    {id: 2, message: "It's me first post", likesCount: '20'},
    {id: 3, message: 'Yo', likesCount: '3'},
    {id: 4, message: 'message 1', likesCount: '4'},
    {id: 5, message: 'message 2'},
    {id: 6, message: 'message 3'},
  ]

  return (
    <div className={classes.profile}>      
      <ProfileInfo />

      <div className={classes.posts}>
        <h2 className={classes.title}>Posts</h2>
        <div className={classes.postFormWrap}>
          <textarea></textarea>
          <div>
            <button>Add post</button>
          </div>
        </div>
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        {/* <Post message="message 3" likes="3" />
        <Post message="message 4" likes="4" /> */}
      </div>
    </div>
  );
}

export default Profile;