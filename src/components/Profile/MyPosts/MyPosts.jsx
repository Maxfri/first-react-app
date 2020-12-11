import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post messages='Hello world' countLike='10'/>
        <Post messages='Hi, how are you?'countLike='100500'/>
      </div>
    </div>
  );
}

export default MyPosts;