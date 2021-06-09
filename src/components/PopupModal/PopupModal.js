import React from 'react';
import { Modal } from 'components/common';

const PopupModal = ({ open, closeModal }) => {
  return (
    <Modal open={open} handleCancel={closeModal} handleOk={closeModal} modalTitle="Popup">
      <p>Hi, it's popup modal.</p>
    </Modal>
  );
};

export default PopupModal;
