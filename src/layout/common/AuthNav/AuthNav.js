import React from 'react';
import { Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <div>
      <Link to="/register" >
        sign up
      </Link>
      <Link to="/login" >
        log in
      </Link>
    </div>
  );
};