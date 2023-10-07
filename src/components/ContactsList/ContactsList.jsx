import { useEffect, useState } from 'react';
import { ListItem, Button, Number } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getContacts, getFilterValue } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const [filteredContacts, setFilteredContacts] = useState(contacts);
  useEffect(() => {
    setFilteredContacts(
      contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [contacts, filter]);

  return (
    <div>
      <ul>
        {filteredContacts.map(({ name, id, phone }) => {
          return (
            <ListItem key={id}>
              {name}: <Number>{phone}</Number>
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
