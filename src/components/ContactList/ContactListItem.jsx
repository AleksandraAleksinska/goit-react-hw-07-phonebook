import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';
import PropTypes from "prop-types";


const ContactListItem = ({ contacts }) => {

    const dispatch = useDispatch();  
    
    const handleDeleteContact = (contactId) => {
      dispatch(deleteContact(contactId));
    };
    
    return (
      <Fragment>
        { contacts && contacts.map((contact) => 
          <li className={css.listItem} key={contact.id}>- {contact.name}: {contact.phone} <button className={css.formButton} type='button' onClick={() => {handleDeleteContact(contact.id)}}>Delete</button> </li>)} 
      </Fragment>
        
  )
};

export default ContactListItem;


ContactListItem.propTypes = {
  contact: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired, 
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }))
};