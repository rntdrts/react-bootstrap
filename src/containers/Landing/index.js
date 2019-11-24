import React from 'react';
import { useTranslation } from 'react-i18next';

const Landing = () => {
  const { t } = useTranslation();
  return <div>{t('Welcome to React')}</div>;
};

export default Landing;
