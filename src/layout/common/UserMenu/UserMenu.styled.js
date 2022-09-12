import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.p`
  font-weight: 700;
  margin-right: 16px;
  margin-left: 12px;
  color: #2a2a2a;
`;
export const Text = styled.span`
  margin-left: 8px;
  color: #2a2a2a;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 16px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  cursor: pointer;
  padding: 10px;
  margin-right: 10px;
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
`;
