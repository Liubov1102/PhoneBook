import { Item, Button ,Icon } from "./ContactElement.styled";
import { useDeleteContactMutation } from "redux/contacts/contactsSlice";

export const ContactElement = ({ id, name, number }) => {
const [deleteContact] = useDeleteContactMutation();

  return (  
    <Item >
      <span>{name} : {number}</span>
        <Button
          type='button'
          onClick={() => deleteContact(id)}
        >
          <Icon />
        </Button>
    </Item>
  );
};