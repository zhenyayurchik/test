import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';

const Modal = ({
  open,
  cancelText = 'Cancel',
  okText = 'Ok',
  modalTitle = 'Title',
  handleOk,
  handleCancel,
  children
}) => {
  return (
    <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{modalTitle}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={handleCancel} color="primary">
          {cancelText}
        </Button>
        <Button onClick={handleOk} color="primary">
          {okText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default Modal;
