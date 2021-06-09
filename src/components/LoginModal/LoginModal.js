import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, TextInput } from 'components/common';
import { WELCOME_PATH } from 'constants/paths';
import styles from './LoginModal.module.scss';

const LoginModal = ({ open, closeModal }) => {
  const history = useHistory();
  const [modalValue, setModalValue] = useState({ login: '', password: '' });

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setModalValue({ ...modalValue, [name]: value });
  };

  const submitLogin = () => {
    history.push(WELCOME_PATH, modalValue);
  };

  return (
    <Modal
      open={open}
      handleCancel={closeModal}
      handleOk={submitLogin}
      modalTitle="Login">
      <div className={styles.inputsWrapper}>
        <TextInput
          value={modalValue?.login}
          onChange={onChangeValue}
          name="login"
          type="text"
          label="Login"
        />
        <TextInput
          value={modalValue?.password}
          onChange={onChangeValue}
          name="password"
          type="password"
          label="Password"
        />
      </div>
    </Modal>
  );
};

export default LoginModal;
