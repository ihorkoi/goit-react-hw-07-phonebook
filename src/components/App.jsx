import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { getContacts } from 'redux/selectors';
export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />

      {contacts.length === 0 ? (
        <p>You don`t have any contact yet</p>
      ) : (
        <>
          <h2>Contacts</h2>

          <Filter></Filter>
          <ContactsList />
        </>
      )}
    </div>
  );
};
