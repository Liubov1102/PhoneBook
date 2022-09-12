import { Box, Title } from './Container.styled';

export default function Container({ children, title}) {
  return (
    <Box >
       {title && <Title>{title}</Title>}
      {children}
    </Box>
  );
};

