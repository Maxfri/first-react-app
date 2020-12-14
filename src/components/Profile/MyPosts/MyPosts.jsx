import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let posts = [
    { id: 1, message: 'Hello world', likesCount: 12 },
    { id: 2, message: 'Hi, how are you??', likesCount: 100500 },
  ]

  let postsElements = posts.map((post) => {
    return <Post messages={post.message} likesCount={post.likesCount} />
  });

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;