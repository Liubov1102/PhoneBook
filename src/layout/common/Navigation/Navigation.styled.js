import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  display: inline-block;
  padding: 10px ; 
  margin-right: 12px;
  text-decoration: none;
  color: #2a2a2a;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 5px solid transparent;
   &.active {
    border-bottom: 5px solid #b55b2d; 
`;
