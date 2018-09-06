import styled, { css } from 'styled-components';

export const Button = styled.div`
  border-radius: 3px;
  padding: 10px;
  margin: 20px auto;
  background: transparent;
  color: #81D8F7;
  border: 2px solid #81D8F7;
  display: inline-block;
  opacity: ${props => props.opacity};
  cursor: ${props => (props.notAllowed ? 'not-allowed' : 'pointer')};
  ${props => props.full && css`
    background: #81D8F7;
    color: white;
  `}
`;
