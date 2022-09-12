import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  background: rgba(255, 228, 181, 0.3);
  max-width: 380px;
  width: auto;
  margin-left: auto ;
  margin-right: auto;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 0 rgb(37 38 50 / 70%);
`;
export const Title = styled.h2`
  text-content: center;
  margin: 0;
  font-weight: 700;
  text-transform: uppercase;
  color: #2a2a2a;
`;