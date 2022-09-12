

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import { Title, Label, Button, Input } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    navigate('/contacts');
    setEmail('');
    setPassword('');
  };
  return (    
    <>
      <Title>authorization</Title>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Label >
          email
          <Input
            type="email"
            name="email"
            required={true}
            value={email}
            onChange={handleChange}          
          />
        </Label>

        <Label >
          password
          <Input
            type="password"
            name="password"
            required={true}
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit" >login</Button>
      </form >
    </>
  );
};