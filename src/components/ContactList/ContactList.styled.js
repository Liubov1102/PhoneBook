import styled from 'styled-components';
import { ImBin } from 'react-icons/im';

export const List = styled.ul`
    width: 400px;
    padding: 8px;    
    margin-top: 8px;
    overflow: scroll;
    height: 290px;
`;

export const Item = styled.li`
  display: flex;
  justify-content:space-between;
  align-items: center ;
  font-size: 20px;
  font-weight: 400;
  margin-left: 10px;   
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  padding: 8px;
  margin: 5px 10px;
  color: #fff;
  background: #b55b2d;
  border: none;
  border-radius: 4px;
  transition-property: box-shadow;
  box-shadow: 4px 4px 10px 0 rgb(37 38 50 / 70%);
 :hover {
    box-shadow: none;
 }
`;
 export const Icon = styled(ImBin)`
  width: 20px;
  height: 20px;
 `;