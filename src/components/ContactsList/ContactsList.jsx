import { List, Item, Span, Button } from './ContactsList.styled';
import { MdDelete } from 'react-icons/md';
import { useContacts } from 'hooks/useContacts';

export const ContactsList = () => {
  const { contacts, filter, deleteContacts } = useContacts();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Span>
              {name}: {number}
            </Span>
            <Button onClick={() => deleteContacts(id)}>
              <MdDelete size={15} />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
