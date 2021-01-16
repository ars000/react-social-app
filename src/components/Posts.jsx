import React from 'react';
import {createUseStyles} from 'react-jss';
import Post from './Post';

const useStyles = createUseStyles ({
  posts: {
    padding: '15px',
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

const Posts = (props) => {
  const classes = useStyles()

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} /> );

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={classes.posts}>
    <h2 className={classes.title}>Posts</h2>
    <div className={classes.postFormWrap}>
        <textarea ref={newPostElement}></textarea>
        <div>
        <button onClick={ addPost }>Add post</button>
        </div>
    </div>
        { postsElements }
    </div>
  );
}

export default Posts;