import { useDispatch, useSelector } from 'react-redux';
import * as contactsActions from 'store/contacts/contactsSlice';
import * as filterActions from 'store/filter/filterSlice';
import { selectContacts, filterContacts } from 'store/selectors/selectors';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(filterContacts);
  const dispatch = useDispatch();

  const addContacts = newContact =>
    dispatch(contactsActions.addContacts(newContact));

  const deleteContacts = id => dispatch(contactsActions.deleteContacts(id));

  const filteredContacts = value =>
    dispatch(filterActions.changeFilterValue(value));

  return { contacts, filter, addContacts, deleteContacts, filteredContacts };
};
