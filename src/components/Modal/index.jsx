import React from 'react';
import classNames from 'classnames';
import './modal.scss'

const Modal = ({ classes, type, active, setActive, width, height, children }) => {
  const modalClasses = classNames('modal', { [`modal-${type}`]: type, 'is-active': active }, classes);

  return (
    <div className={modalClasses} onClick={() => setActive(false)}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()} style={{ width, height }}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
