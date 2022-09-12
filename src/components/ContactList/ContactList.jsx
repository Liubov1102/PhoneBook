import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts/filterSlice';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
import { ContactElement } from "./ContactElement/ContactElement";
import { List } from "./ContactList.styled";

export const ContactList = () => {
const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilter);
  const filterContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
 
  return (
    <List >
      {contacts &&
        filterContacts.map(({ id, name, number }) => (
        
          <ContactElement
            key={id}
            id={id}
            name={name}
            number={number}
          />
        ))}
    </List>
  )
};