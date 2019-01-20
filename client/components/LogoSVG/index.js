import React from 'react';
import PropTypes from 'prop-types';

const LogoSVG = props => {
  let length = props.length;
  return (
    <img src="/image/logo.png" />
  );
};

LogoSVG.propTypes = {
  length: PropTypes.any
};

export default LogoSVG;
