import { List, Item, Span, Button } from './ContactsList.styled';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'store/contacts/contactsSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

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
            <Button onClick={() => dispatch(deleteContacts(id))}>
              <MdDelete size={15} />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
