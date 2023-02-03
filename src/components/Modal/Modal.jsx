import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalBlock, ModalImg } from './Modal.styeld';

const modalRoot = document.getElementById('modal');

export const Modal = ({ closeModal, tags, modalImg }) => {
  useEffect(() => {
    const closeByClick = element => {
      if (element.code !== 'Escape') {
        return;
      }

      closeModal();
    };

    window.addEventListener('keydown', closeByClick);

    return () => {
      window.removeEventListener('keydown', closeByClick);
    };
  }, [closeModal]);

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalBlock>
        <ModalImg src={modalImg} alt={tags} />
      </ModalBlock>
    </Overlay>,
    modalRoot
  );
};
