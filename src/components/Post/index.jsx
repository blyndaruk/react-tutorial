import React, { forwardRef } from 'react';
import BaseButton from '../UI/Button';
import './Post.scss';

const Post = forwardRef((
  {
    post,
    remove,
    ...props
  },
  ref
) => {
  const { id, title, description } = post

  function deletePost () {
    remove(id)
  }

  return (
    <div className="post" ref={ref}>
      {title && <h2 className="post__title">{title} <span style={{ fontSize: '70%' }}>(id:{id})</span></h2>}
      {description && (
        <div className="post__description">
          <p>{description}</p>
        </div>
      )}
      <BaseButton onClick={deletePost}>Delete</BaseButton>
    </div>
  );
})
export default Post;
