import React, { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import Portal from '../Portal/Portal';

import './modal.scss'

const Modal = (
  {
    active,
    children,
    classes,
    setActive,
    type,
    width,
    height,
  }
) => {
  const modalClasses = classNames('modal', { [`modal-${type}`]: type, 'is-active': active }, classes);
  const modalRef = React.useRef(null)

  useEffect(() => {
    if (active) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset' }
  }, [active]);

  return (
    <CSSTransition
      in={active}
      nodeRef={modalRef}
      classNames="modal"
      timeout={{
        appear: 0,
        enter: 0,
        exit: 200,
      }}
      mountOnEnter
      unmountOnExit
    >
      <Portal className="modal-portal">
        <div className={modalClasses} onClick={() => setActive(false)} ref={modalRef}>
          <div className="modal__content" onClick={(e) => e.stopPropagation()} style={{ width, height }}>
            {children}
          </div>
        </div>
      </Portal>
    </CSSTransition>
  );
};

export default Modal;
