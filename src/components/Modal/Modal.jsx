import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBlock, ModalImg } from './Modal.styeld';

const modalRoot = document.getElementById('modal');

export const Modal = ({ closeModal, tags, modalImg }) => {
  const closeKeyDown = element => {
    if (element.code === 'Escape') {
      closeModal();
    }
  };

  const handelClick = event => {
    if (event.currentTarget === event.target) closeModal();
  };

  useEffect(() => {
    window.addEventListener('keydown', closeKeyDown);

    return () => {
      window.removeEventListener('keydown', closeKeyDown);
    };
  });

  return createPortal(
    <Overlay onClick={handelClick}>
      <ModalBlock>
        <ModalImg src={modalImg} alt={tags} />
      </ModalBlock>
    </Overlay>,
    modalRoot
  );
};
