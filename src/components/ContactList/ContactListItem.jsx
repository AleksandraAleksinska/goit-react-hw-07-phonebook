import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import PropTypes from "prop-types";


const ContactListItem = ({ contacts }) => {

    const dispatch = useDispatch();    
    
    return (
      <Fragment>
        { contacts.map((contact) => 
          <li className={css.listItem} key={nanoid()}>- {contact.name}: {contact.number} <button className={css.formButton} type='button' onClick={() => dispatch(deleteContact(contact.id))}>Delete</button> </li>)} 
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