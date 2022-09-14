
import { useEffect } from 'react';
import { useRedux } from 'hooks';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { List, Item, Button, Icon } from "./ContactList.styled";

export const ContactList = () => {
    const [selector, dispatch] = useRedux();
  const contacts = selector(contactsSelectors.getAllContacts);
  const filter = selector(contactsSelectors.getFilter);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const deleteContactbyId = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
  };
  const getFilteredContacts = () => {
    const normilizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };
 
  return (
    <List >
      {getFilteredContacts().map(({ id, name, number }) => (
        <Item key={id}>
         
            <span>{name} : {number}</span>
            
          <Button type="button" onClick={() => deleteContactbyId(id)}>
            <Icon />
          </Button>
        </Item>
      ))}
    </List>
  )
};