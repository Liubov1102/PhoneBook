import React from 'react';
import { Image, Wrapper, Title } from './Home.styled';
import  telephone  from '../../images/telephone.png';

const Home = () => (
  <Wrapper>
    <Title>
      PHONEBOOK
    </Title >
    
    <Image
      src={telephone}
      alt="telephone"
    />
  </Wrapper>
);

export default Home;