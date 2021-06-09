import React, { useState } from 'react';
import { Button } from 'components/common';
import { LoginModal, PopupModal } from 'components';
import commonStyles from 'pages/CommonStyles.module.scss';

const HomePage = () => {
  const [modalType, setModalType] = useState(null);
  const loginType = 'login';
  const popupType = 'popup';
  const isLoginOpen = modalType === loginType;
  const isPopupOpen = modalType === popupType;

  const openModal = (e) => {
    const { name } = e.target;
    setModalType(name);
  };

  const closeModal = () => setModalType(null);

  return (
    <div className={commonStyles.page}>
      <Button text="Login" name={loginType} onClick={openModal} />
      <Button text="Popup" name={popupType} onClick={openModal} />
      {isLoginOpen && <LoginModal open={isLoginOpen} closeModal={closeModal} />}
      {isPopupOpen && <PopupModal open={isPopupOpen} closeModal={closeModal} />}
    </div>
  );
};
export default HomePage;
