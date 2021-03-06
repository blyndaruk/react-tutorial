import React from 'react';
import Post from '../Post';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import cssModule from './Posts.module.scss'

const Posts = ({ posts, title, deletePost }) => {

  if (!posts.length) {
    return (
      <h2 style={{ textAlign: 'center' }}>No posts found!</h2>
    )
  }

  return (
    <div className="posts">
      <h1 className="posts__title" style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition
            key={post.id}
            classNames={{
              enterActive: cssModule['post-enter'],
              enterDone: cssModule['post-enter-active'],
              exitActive: cssModule['post-exit-active'],
              exitDone: cssModule['post-exit']
            }}
            timeout={{
              appear: 0,
              enter: 0,
              exit: 500,
            }}
            mountOnEnter
            unmountOnExit
          >
            <Post post={post} key={post.id} remove={deletePost} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default Posts;
