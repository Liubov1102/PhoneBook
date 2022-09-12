import styled from 'styled-components';

export const Title = styled.h2`
  font-weight: 700;
  text-transform: uppercase;
  color: #2a2a2a;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 500;
  color: #2a2a2a;
  margin-top: 20px;
`;
export const Input = styled.input`
  border: 1px solid #2a2a2a;;
  font: inherit;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  width: 360px;
  outline: 0;
  margin-top: 4px;
  :focus {
    border: 2px solid #b55b2d;
  }
`;
export const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;
  margin-top: 20px;
  display: block;
  color: #fff;
  background: #b55b2d;
  border: none;
  border-radius: 4px;
  transition-property: box-shadow;
  font-weight: 700;
  font-size: 16px;
  box-shadow: 4px 4px 10px 0 rgb(37 38 50 / 70%);
 :hover {
    box-shadow: none;
 }
`;


