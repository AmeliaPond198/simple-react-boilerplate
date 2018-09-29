import styled, { css } from 'styled-components';

export const CardWrapper = styled.div`
  border-radius: ${props => props.borderRadius}
  width: ${props => props.width}
  height: ${props => props.height}
  background-color: ${props => props.backgroundColor}
  display: flex;
  flex-direction: ${props => (props.inverse ? 'column-reverse' : 'column')};
`;

export const CardPhoto = styled.img`

`;

export const CardText = styled.div`

`;
