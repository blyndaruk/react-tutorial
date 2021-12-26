import React, { useState } from 'react';

import BaseButton from '../UI/Button';
import BaseInput from '../UI/Input';

import './AddPostForm.scss'

const AddPostForm = (props) => {
  const [post, setPost] = useState({ title: '', description: '' })

  function addPost(e) {
    e.preventDefault()
    if (!post.title || !post.description) return
    props.onSubmit({ ...post, id: Date.now() })
    setPost({ title: '', description: '' })
  }

  return (
    <form className="add-post-form">
      <BaseInput
        id="title"
        type="text"
        placeholder="Write title"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <BaseInput
        id="description"
        type="text"
        placeholder="Write description"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
      />
      <div className="add-post-form__actions">
        <BaseButton type="submit" onClick={addPost}>
          <span>Add Post</span>
        </BaseButton>
      </div>
    </form>
  );
};

export default AddPostForm;
