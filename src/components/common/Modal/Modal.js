import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core';

const ModalComponent = (props) => {
  const {
    cancelText = 'Cancel',
    okText = 'Ok',
    modalTitle = 'Title',
    handleOk,
    handleCancel,
    content,
    open
  } = props;

  return (
    <Dialog open={open} onClose={handleCancel} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{modalTitle}</DialogTitle>
      <DialogContent>{content}</DialogContent>
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

export default ModalComponent;
