
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Title } from 'components/ui/Title';
import { Label } from 'components/ui/Label';
import { Input } from 'components/ui/Input';
import { Button } from 'components/ui/Button';
import { ErrorText } from 'components/ui/ErrorText';
import { Formik, Form  } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().required('Please, enter email').email(),
  password: Yup.string().required('Please, enter password').min(7).max(14),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    //const {  email, password } = values;
    dispatch(authOperations.logIn(values));
    resetForm();
  };
  return (
    <>
      <Title>authorization</Title>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Form>
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
            login
          </Button>
        </Form>
            
      </Formik>
    </>
  );
};