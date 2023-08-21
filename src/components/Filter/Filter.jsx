import { Label, Input } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { filteredContacts } from '../../store/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        onChange={event => dispatch(filteredContacts(event.target.value))}
      ></Input>
    </Label>
  );
};
