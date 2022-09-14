
import Navigation from 'layout/common/Navigation';
import UserMenu from 'layout/common/UserMenu/UserMenu';
import AuthNav from 'layout/common/AuthNav';
import { Header } from './Header'; 
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

