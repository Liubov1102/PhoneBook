
import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList"; 
import { Filter } from "components/Filter/Filter";
import { Box, Title} from "./Contacts.styled";

export default function Contacts() {
 
  return (
    <Box >
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Box>
  );
};