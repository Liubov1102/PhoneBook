//import { useAuth } from 'hooks';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) {
  //const { isLoggedIn } = useAuth();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}