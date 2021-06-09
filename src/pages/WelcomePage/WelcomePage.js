import React from 'react';
import { useLocation } from 'react-router-dom';
import commonStyles from '../CommonStyles.module.scss';

const WelcomePage = () => {
  const { state } = useLocation();
  return <div className={commonStyles.page}>{`Hello, ${state.login}`}</div>;
};
export default WelcomePage;
