import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import ContactListItem from './ContactListItem';
import css from './ContactList.module.css'

const ContactList = () => {
  
 
  return (
    <Fragment>
    <ul className={css.contactList}>            
      <ContactListItem 
      contacts={useSelector(selectFilteredContacts)}
      />     
    </ul>
    </Fragment>
  )
};

export default ContactList;

