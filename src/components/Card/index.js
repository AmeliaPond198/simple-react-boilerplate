import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, CardPhoto, CardText } from './styles';

const Card = ({
  borderRadius,
  width,
  height,
  backgroundColor,
  inverse,
  photo,
  text,
}) => (
  <CardWrapper
    borderRadius={borderRadius}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    inverse={inverse}
  >
    <CardPhoto src={photo} />
    <CardText>
      {text}
    </CardText>
  </CardWrapper>
);

Card.propTypes = {
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backgroundColor: PropTypes.string,
  inverse: PropTypes.bool,
  photo: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
