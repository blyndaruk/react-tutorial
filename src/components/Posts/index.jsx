import React from 'react';
import Post from '../Post';

const Posts = ({ posts, title, deletePost }) => {

  if (!posts.length) {
    return (
      <h2 style={{ textAlign: 'center' }}>No posts found!</h2>
    )
  }

  return (
    <div className="posts">
      <h1 className="posts__title" style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post) => <Post post={post} key={post.id} remove={deletePost} />)}
    </div>
  );
};

export default Posts;
