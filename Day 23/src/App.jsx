import { Routes, Route } from 'react-router-dom';
import { useState, useReducer, useRef, createContext, useEffect } from 'react';
import Diary from './pages/Diary';
import New from './pages/New';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case 'INIT':
      return action.data;
    case 'CREATE':
      {
        nextState = [action.data, ...state];
      }
      break;
    case 'EDIT':
      {
        nextState = state.map((item) =>
          String(item.id) === String(action.data.id) ? action.data : item,
        );
      }
      break;
    case 'DELETE':
      {
        nextState = state.filter(
          (item) => String(item.id) !== String(action.data.id),
        );
      }
      break;
    default:
      return state;
  }

  localStorage.setItem('diary', JSON.stringify(nextState));
  return nextState;
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  // create diary
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // edit diary
  const onEdit = (id, createdDate, emotionId, content) => {
    dispatch({
      type: 'EDIT',
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // delete diary
  const onDelete = (id) => {
    dispatch({
      type: 'DELETE',
      data: {
        id,
      },
    });
  };

  useEffect(() => {
    const storedData = localStorage.getItem('diary');
    if (!storedData) return;
    const parseData = JSON.parse(storedData);
    if (!Array.isArray(parseData)) {
      setIsLoading(false);
      return;
    }
    let maxId = 0;
    parseData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = item.id;
      }
    });
    idRef.current = maxId + 1;
    dispatch({
      type: 'INIT',
      data: parseData,
    });
    setIsLoading(false);
  }, []);

  if (isLoading){
    return <div>Loading...</div>
  }
  
  return (
    <div>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/New" element={<New />}></Route>
            <Route path="/Diary/:id" element={<Diary />}></Route>
            <Route path="/Edit/:id" element={<Edit />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </div>
  );
}

export default App;
