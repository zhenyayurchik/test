import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, TextInput, ModalComponent } from 'components/common';
import { WELCOME_PATH } from 'constants/paths';
import commonStyles from 'pages/CommonStyles.module.scss';

const HomePage = () => {
  const history = useHistory();
  const [modalType, setModalType] = useState(null);
  const [modalValue, setModalValue] = useState({ login: '', password: '' });

  const onChangeValue = (e) => {
    const { name, value } = e.target;
    setModalValue({ ...modalValue, [name]: value });
  };

  const submitLogin = () => {
    history.push(WELCOME_PATH, modalValue);
  };

  const loginType = 'Login';
  const popupType = 'Popup';
  const isLoginOpen = modalType === loginType;

  const openModal = (e) => {
    const { name } = e.target;
    setModalType(name);
  };

  const closeModal = () => setModalType(null);
  const okClickFunc = isLoginOpen ? submitLogin : closeModal;

  const contentComponent = isLoginOpen ? (
    <div className={commonStyles.inputsWrapper}>
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
  ) : (
    <div> Popup modal</div>
  );

  return (
    <div className={commonStyles.page}>
      <Button text="Login" name={loginType} onClick={openModal} />
      <Button text="Popup" name={popupType} onClick={openModal} />
      <ModalComponent
        handleOk={okClickFunc}
        modalTitle={modalType}
        open={!!modalType}
        content={contentComponent}
        handleCancel={closeModal}
      />
    </div>
  );
};
export default HomePage;
