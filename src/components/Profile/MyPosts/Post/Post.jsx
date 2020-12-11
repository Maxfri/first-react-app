import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg"></img>
      { props.messages }
      <div>
        <span>{ props.countLike }</span>
      </div>
    </div>
  );
}

export default Post;