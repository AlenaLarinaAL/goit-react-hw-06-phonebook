import PropTypes from 'prop-types';
import { List, Item, Span, Button } from './ContactsList.styled';
import { MdDelete } from 'react-icons/md';

export const ContactsList = ({ contacts, handleDelete }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <Span>
          {name}: {number}
        </Span>
        <Button onClick={() => handleDelete(id)}>
          <MdDelete size={15} />
        </Button>
      </Item>
    ))}
  </List>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
