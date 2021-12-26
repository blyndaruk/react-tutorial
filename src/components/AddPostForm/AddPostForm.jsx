import React, { useState } from 'react';

import BaseInput from '../UI/Input/BaseInput';
import BaseButton from '../UI/Button/BaseButton';

import './AddPostForm.scss'

const AddPostForm = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function addPost(e) {
    e.preventDefault()
    props.onSubmit({ title, description })
  }

  return (
    <form className="add-post-form">
      <BaseInput
        id="title"
        type="text"
        placeholder="Write title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <BaseInput
        id="description"
        type="text"
        placeholder="Write description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="add-post-form__actions">
        <BaseButton type="button" onClick={addPost}>
          <span>Add Post</span>
        </BaseButton>
      </div>
    </form>
  );
};

export default AddPostForm;
