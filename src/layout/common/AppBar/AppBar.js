
import Navigation from 'layout/common/Navigation/Navigation';
import UserMenu from 'layout/common/UserMenu/UserMenu';
import AuthNav from 'layout/common/AuthNav/AuthNav';
import { Header } from './AppBar.styled';
import { useAuth } from 'hooks';

export default function AppBar() {
  const { isLoggedIn } = useAuth();
  
  return (
    <Header >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

