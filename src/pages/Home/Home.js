import React from 'react';
import { Image, Title } from './Home.styled';
import { Wrapper } from 'components/ui/Wrapper';
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