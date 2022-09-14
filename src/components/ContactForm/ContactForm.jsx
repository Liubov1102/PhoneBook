
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Notiflix from 'notiflix';
import { useRedux } from 'hooks';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { InputPhone } from "./ContactForm.styled";
import { Label } from 'components/ui/Label';
import { Input } from 'components/ui/Input';
import { ButtonAdd } from 'components/ui/ButtonAdd';
import { ErrorText } from 'components/ui/ErrorText';

const validationSchema = Yup.object({
    name: Yup.string().max(16).required('Please, enter name.'),
    number: Yup.number().min(5).positive().required('Please, enter number.'),
});

export const ContactForm = () => {
  const [selector, dispatch] = useRedux();
  const contacts = selector(contactsSelectors.getAllContacts);

  const handleSubmit = async (values, { resetForm }) => {
    const { name, number } = values;
     
    if (contacts.find(item => item.name === name) ||
      contacts.find(item => item.number === number)) {
      Notiflix.Notify.failure('This contact is already exists');
      return resetForm('');
    }
    try {
      await dispatch(contactsOperations.addContact({ name, number }));

    } catch (error) {
      Notiflix.Notify.failure('Oops, something goes wrong');
    }
    resetForm()
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
 
        <ButtonAdd type="submit" >
          Add new contact
        </ButtonAdd>
      </Form>
    </Formik>
    
  )
};