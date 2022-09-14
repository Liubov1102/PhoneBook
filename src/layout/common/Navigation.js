import React from 'react';
import { useAuth } from 'hooks';
import { Link } from 'components/ui/Link'; 

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  
  return (
    <nav>
      <Link to="/">
        home
      </Link>

      {isLoggedIn &&
        <Link to="/contacts" >
          contacts
        </Link>
      }
    </nav>
  );
};

export default Navigation;
