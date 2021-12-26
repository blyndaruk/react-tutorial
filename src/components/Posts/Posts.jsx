import React from 'react';
import Post from '../Post/Post';

const Posts = ({ posts, title }) => {

  return (
    <div className="posts">
      <h1 className="posts__title" style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post) =>
        <Post post={post} key={post.id}/>
      )}
    </div>
  );
};

export default Posts;
