import { useState, useRef, memo, useContext } from 'react';
import './ContactEditor.css';
import { Context } from '../App';

function ContactEditor() {
  const { onCreate } = useContext(Context);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const [state, setState] = useState({
    name: '',
    contact: '',
  });

  const isRefName = useRef('');
  const isRefContact = useRef('');

  const onChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (!state.name) {
      isRefName.current.focus();
      return;
    } else if (!emailRegex.test(state.contact)) {
      alert('유효한 이메일 주소를 입력하세요.');
      return;
    }

    onCreate(state.name, state.contact);
    setState({ name: '', contact: '' });
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          name="name"
          ref={isRefName}
          value={state.name}
          onChange={onChangeState}
          className="name"
          placeholder="이름 ..."
        />
        <input
          type="email"
          ref={isRefContact}
          name="contact"
          value={state.contact}
          onChange={onChangeState}
          className="contact"
          placeholder="연락처(이메일) ..."
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}

export default memo(ContactEditor);
