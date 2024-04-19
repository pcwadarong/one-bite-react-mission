import './ContactItem.css';
import { memo, useContext } from 'react';
import { Context } from '../App';

function ContactItem({ id, name, contact }) {
  const { onDelete } = useContext(Context);

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => onDelete(id)}>🗑️ Remove</button>
    </div>
  );
}

export default memo(ContactItem);
