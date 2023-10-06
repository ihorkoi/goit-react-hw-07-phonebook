import { ListItem, Button, Number } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilterValue } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <ListItem key={id}>
              {name}: <Number>{number}</Number>
              <Button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </ul>
    </div>
  );
};
// }
