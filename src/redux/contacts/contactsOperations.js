import { getContacts, postContact, removeContact } from 'api/contacts';
//import { toast } from 'react-toastify';
import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactError,
  addContactSuccess,
  addContactRequest,
  deleteContactError,
  deleteContactRequest,
} from './contactsAction';
import Notiflix from 'notiflix';

const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await getContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error.message));
  }
};

const addContact =
  ({ name, number }) =>
  async dispatch => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());
    try {
      const { data } = await postContact(contact);
       Notiflix.Notify.success(`"${data.name}" is add in your contacts`);
      const response = await getContacts();
      dispatch(addContactSuccess(response.data));
    } catch (error) {
      dispatch(addContactError(error.message));
       Notiflix.Notify.failure('Something goes wrong');
    }
  };

const deleteContact = contactId => async dispatch => {
  dispatch(deleteContactRequest());
  try {
    await removeContact(contactId);
    Notiflix.Notify.success('The contact was deleted');
  } catch (error) {
    dispatch(deleteContactError(error.message));
    Notiflix.Notify.failure('Something goes wrong');
  } finally {
    const { data } = await getContacts();
    dispatch(fetchContactsSuccess(data));
  }
};

const contactOperations = {
  fetchContacts,
  addContact,
  deleteContact,
};
export default contactOperations;