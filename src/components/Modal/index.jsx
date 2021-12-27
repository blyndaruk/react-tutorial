import React from 'react';
import classNames from 'classnames';
import './modal.scss'
import AddPostForm from '../AddPostForm';

const Modal = ({ classes, type, active, setActive, onSubmit, width, height }) => {
  const modalClasses = classNames('modal', { [`modal-${type}`]: type, 'is-active': active }, classes);

  return (
    <div className={modalClasses} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()} style={{ width, height }}>
        <AddPostForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

export default Modal;
