import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './styles';

const Label = ({ enableLogo, number }) => (
  <Button onClick={() => enableLogo()}>
    Number:
    {number}
  </Button>
);

Label.propTypes = {
  enableLogo: PropTypes.func,
  number: PropTypes.number,
};

export default Label;
