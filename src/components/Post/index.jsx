import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import BaseButton from '../UI/Button';
import cssModule from './Post.module.scss';

const Post = forwardRef((
  {
    post,
    remove,
    ...props
  },
  ref
) => {
  const { id, title, body } = post
  const navigate = useNavigate()

  function deletePost () {
    remove(id)
  }

  function openPost () {
    navigate(`/posts/${post.id}`)
  }

  return (
    <div className={cssModule['post']} ref={ref}>
      {title && <h2 className={cssModule['post__title']}>{id}: {title} <span style={{ fontSize: '70%' }}>(id:{id})</span></h2>}
      {body && (
        <div className={cssModule['post__description']}>
          <p>{body}</p>
        </div>
      )}
      <div className={cssModule['post__actions']}>
        <BaseButton onClick={openPost}>Open</BaseButton>
        <BaseButton onClick={deletePost}>Delete</BaseButton>
      </div>
    </div>
  );
})
export default Post;
