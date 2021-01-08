import React from 'react';
import {createUseStyles} from 'react-jss';
import avatar from './../assets/img/user-avatar.png';

const useStyles = createUseStyles ({
  item: {
    '& img': {
      width: '50px',
    }
  },
})

const Post = (props) => {
  const classes = useStyles()

  return (
    <div className={classes.item}>
      <img src={avatar} alt="" />
      <div className={classes.itemText}>
        {props.message}
      </div>
      <span>{props.likes}</span>
    </div>
  );
}

export default Post;