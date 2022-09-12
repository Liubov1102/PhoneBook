import { useDispatch,useSelector } from 'react-redux';
import { authOperations } from 'redux/auth';
//import { useAuth } from 'hooks'; 
import { Box, Title, Text, Button } from './UserMenu.styled';
import { authSelectors } from 'redux/auth';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUser);
  
  //const { user } = useAuth();

  return (
    <Box>
      <Title>
        Welcome ,
        <Text >
          {name}
        </Text>
      </Title>
      <Button
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log Out
      </Button>
    </Box>
  );
};