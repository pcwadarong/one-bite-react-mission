import './App.css';
import ContactEditor from './components/ContactEditor';
import ContactList from './components/ContactList';
import {
  useRef,
  useMemo,
  useEffect,
  useReducer,
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

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

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

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={{ contacts }}>
        <ContactDispatchContext.Provider value={{ memoizedDispatch }}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
