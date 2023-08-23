import { Label, Input } from './Filter.styled';
import { useContacts } from 'hooks/useContacts';

export const Filter = () => {
  const { filteredContacts } = useContacts();

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        onChange={event => filteredContacts(event.target.value)}
      ></Input>
    </Label>
  );
};
