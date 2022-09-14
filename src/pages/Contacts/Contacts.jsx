
import { useRedux } from 'hooks';
import { useEffect } from 'react';
import { contactsOperations, contactsSelectors } from 'redux/contacts';
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList"; 
import { Filter } from "components/Filter/Filter";
import { Wrapper } from "components/ui/Wrapper"; 
import { Title } from "components/ui/Title";

export default function Contacts() {
const [selector, dispatch] = useRedux();
  const contacts = selector(contactsSelectors.getAllContacts);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper >
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
        {contacts.length !== 0 && <ContactList />}
      <ContactList />
    </Wrapper>
  );
};