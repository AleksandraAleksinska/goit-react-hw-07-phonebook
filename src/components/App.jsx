import { Fragment } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
// import { updateContacts } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/operations';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchingFilter from './SearchingFilter/SearchingFilter';
import { selectError, selectIsLoading } from 'redux/selectors';



const App = () => {

  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])



  // useEffect(() => {
  //   const storageContacts = JSON.parse(localStorage.getItem('contacts'));
  //   storageContacts && dispatch(updateContacts(storageContacts));
  //   console.log(storageContacts)
  // }, [dispatch]);
  
  

  
  return (
    <Fragment>
      <h2>Phonebook</h2>
      <ContactForm  />
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      <SearchingFilter />
      <ContactList /> 
    </Fragment>
  )
};
 
export default App;

