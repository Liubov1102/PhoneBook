

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authOperations } from 'redux/auth';
import { Title, Label, Input, Button, ErrorText } from './RegisterForm.styled';
import { Formik, Form  } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().max(16).required('Please, enter name'),
  email: Yup.string().required('Please, enter email').email(),
  password: Yup.string().required('Please, enter password').min(7).max(14),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, { resetForm }) => {
    //const { name, email, password } = values;
    dispatch(authOperations.register(values));
    navigate('/contacts');
    resetForm();
  };
  return (
    <>
      <Title>Registration</Title>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
              
        <Form>
          <Label htmlFor='name'>Name
            <Input
              id="name"
              type="text"
              name="name"
              autoComplete="off"
            />
          </Label>
          <ErrorText name="name" component="div" />
              
          <Label htmlFor='email'>email
            <Input
              id="email"
              type="email"
              name="email"
              autoComplete="off"
            />
          </Label>
          <ErrorText name="email" component="div" />
           
          <Label htmlFor='password'>password
            <Input
              id="password"
              type="password"
              name="password"
              autoComplete="off"
            />
          </Label>
          <ErrorText name="password" component="div" />
      
          <Button type="submit" >
            Registration
          </Button>
        </Form>
            
      </Formik>
    </>
  );
};
