
import {  useAddContactMutation, useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { Button, Label, Input, ErrorText, InputPhone } from "./ContactForm.styled";

const validationSchema = Yup.object({
    name: Yup.string().max(16).required('Please, enter name.'),
    number: Yup.number().min(5).positive().required('Please, enter number.'),
});

export const ContactForm = () => {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
     
    if (contacts.find(item => item.name === name) ||
      contacts.find(item => item.number === number)) {
      Notiflix.Notify.failure('This contact is already exists');
      return resetForm('');
    }
    
    addContact({ name, number });
    resetForm();
  };
   

  return (
    
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form  >
          <Label htmlFor='name'>Name
            <Input
              id="name"
              type="text"
              name="name"
              autoComplete="off"
            />
          </Label>
          <ErrorText name="name" component="div" />
              
          <Label htmlFor='number'>Number
            <InputPhone
              id="number"
              type="tel"
              name="number"
              autoComplete="off"
            />
          </Label>
          <ErrorText name="number" component="div" />
 
        <Button type="submit" >
            Add new contact
          </Button>
        </Form>
      </Formik>
    
  )
};