import React from 'react';

const PostComment = ({ comment }) => {
  return (
    <div className="post-comment">
      <p>{comment.name}</p>
      <a href={`mailto:${comment.email}`}>{comment.email}</a>
      <p>{comment.body}</p>
      <hr/>
    </div>
  );
};

export default PostComment;
