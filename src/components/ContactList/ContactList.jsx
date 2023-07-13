import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactListItem from './ContactListItem';

const ContactList = () => {
  
 
  return (
    <Fragment>
    <ul>            
      <ContactListItem 
      contacts={useSelector(selectFilteredContacts)}
      />     
    </ul>
    </Fragment>
  )
};

export default ContactList;

