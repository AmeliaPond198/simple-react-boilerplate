import React from 'react';
import './styles.css';

const Label = ({ enableLogo }) => (
  <div className="test" onClick={() => enableLogo()}>
    Hello World
  </div>
);

export default Label;
