import './ContactList.css';
import ContactItem from './ContactItem';
import { useContext } from 'react';
import { Context } from '../App';

export default function ContactList() {
  const { contacts } = useContext(Context);
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} {...contact} />
      ))}
    </div>
  );
}
