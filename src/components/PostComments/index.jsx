import React from 'react';
import PostComment from '../PostComment';

const PostComments = ({ comments }) => {
  return (
    <div className="post-comments">
      <div className="container">
        {comments && comments.map((comment) => (
          <PostComment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default PostComments;
