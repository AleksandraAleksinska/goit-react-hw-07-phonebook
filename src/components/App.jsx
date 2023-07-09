import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { updateContacts } from 'redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchingFilter from './SearchingFilter/SearchingFilter';



const App = () => {

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    const storageContacts = JSON.parse(localStorage.getItem('contacts'));
    storageContacts && dispatch(updateContacts(storageContacts));
    console.log(storageContacts)
  }, [dispatch]);
  
  useEffect(() => {
    contacts.length && localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  
  return (
    <Fragment>
      <h2>Phonebook</h2>
      <ContactForm  />
      <h2>Contacts</h2>
      <SearchingFilter />
      <ContactList /> 
    </Fragment>
  )
};
 
export default App;

