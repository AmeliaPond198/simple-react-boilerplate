import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Label = ({ enableLogo, number }) => (
  <div className="test" onClick={() => enableLogo()}>
    Number:
    {number}
  </div>
);

Label.propTypes = {
  enableLogo: PropTypes.func,
  number: PropTypes.number,
};

export default Label;
