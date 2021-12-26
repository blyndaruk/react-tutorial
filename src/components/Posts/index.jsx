import React from 'react';
import Post from '../Post';

const Posts = ({ posts, title, deletePost }) => {

  return (
    <div className="posts">
      <h1 className="posts__title" style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post) => <Post post={post} key={post.id} remove={deletePost} />)}
    </div>
  );
};

export default Posts;
