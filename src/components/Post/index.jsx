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
  const { id, title, body } = post

  function deletePost () {
    remove(id)
  }

  return (
    <div className="post" ref={ref}>
      {title && <h2 className="post__title">{id}: {title} <span style={{ fontSize: '70%' }}>(id:{id})</span></h2>}
      {body && (
        <div className="post__description">
          <p>{body}</p>
        </div>
      )}
      <BaseButton onClick={deletePost}>Delete</BaseButton>
    </div>
  );
})
export default Post;
