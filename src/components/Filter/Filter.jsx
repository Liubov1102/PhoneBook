import { useRedux } from 'hooks';
import { changeFilter, contactsSelectors } from 'redux/contacts';
import { Label, Input } from "./Filter.styled";

export const Filter = () => {
  const [selector, dispatch] = useRedux();
  const filter = selector(contactsSelectors.getFilter);
  
  return (
    <Label htmlFor='filter'>
      Find contacts by name
      <Input
        id="filter"
        name="filter"
        type="text"
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </Label>
  )
};