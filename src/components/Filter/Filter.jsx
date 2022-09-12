
import { useSelector, useDispatch } from 'react-redux';
import { Label, Input } from "./Filter.styled";
import { changeFilter, getFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter)
  const dispatch = useDispatch()
  
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