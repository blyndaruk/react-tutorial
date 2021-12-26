import React from 'react';
import './Post.scss';

const Post = ({ post }) => {
  const { id, title, description } = post

  return (
    <div className="post">
      {title && <h2 className="post__title">{title} with id:{id}</h2>}
      {
        description &&
        <div className="post__description">
          <p>{description}</p>
        </div>
      }
    </div>
  );
};

export default Post;
