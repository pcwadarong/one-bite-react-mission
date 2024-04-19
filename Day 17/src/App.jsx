import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import {
  useRef,
  useReducer,
  useEffect,
  useCallback,
  createContext,
} from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
    case 'DELETE':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

export const Context = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const isRef = useRef(0);
  useEffect(() => {
    console.log('update', contacts);
  }, [contacts]);

  const onCreate = useCallback((name, contact) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: isRef.current++,
        name,
        contact,
      },
    });
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({
      type: 'DELETE',
      id,
    });
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <Context.Provider value={{ onCreate, contacts, onDelete }}>
        <section>
          <ContactEditor/>
        </section>
        <section>
          <ContactList />
        </section>
      </Context.Provider>
    </div>
  );
}

export default App;
