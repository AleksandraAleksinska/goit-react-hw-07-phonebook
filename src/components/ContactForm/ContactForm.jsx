import React from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';



const ContactForm = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)  

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (contacts.some((contact) => contact.name === form.elements.name.value)) {
      alert(form.elements.name.value + ' is already in contacts');
      } 
      else {
      dispatch(addContact(form.elements.name.value, form.elements.number.value))       
      }
    
    form.reset();
  }

  return (
    <form className={css.form} onSubmit={handleSubmit}>        
         <label className={css.formLabel}>
           Name 
           <input
             type="text"
             name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
             required
           />
         </label>
         <label className={css.formLabel}>
           Number 
           <input 
             type="tel"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
             required
           />
         </label>
         <button className={css.formButton}type='submit'>Add contact</button>
       </form>
  )
}

export default ContactForm
