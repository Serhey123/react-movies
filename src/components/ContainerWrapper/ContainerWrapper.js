import PropTypes from 'prop-types';

import React from 'react';
import style from './ContainerWrapper.module.css';

export default function ContainerWrapper({ children }) {
  return <div className={style.section}>{children}</div>;
}

ContainerWrapper.propTypes = {
  children: PropTypes.array,
};
