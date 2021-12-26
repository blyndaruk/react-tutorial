import React from 'react';
import BaseButton from '../UI/Button';
import './Post.scss';

const Post = ({ post, remove }) => {
  const { id, title, description } = post

  function deletePost () {
    remove(id)
  }

  return (
    <div className="post">
      {title && <h2 className="post__title">{title} with id:{id}</h2>}
      {description && (
        <div className="post__description">
          <p>{description}</p>
        </div>
      )}
      <BaseButton onClick={deletePost}>Delete</BaseButton>
    </div>
  );
};

export default Post;
