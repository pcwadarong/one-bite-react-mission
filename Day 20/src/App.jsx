import { Routes, Route } from 'react-router-dom';
import { useReducer, useRef, createContext } from 'react';
import Diary from './pages/Diary';
import New from './pages/New';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
import Button from './components/Button';

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: '1번 내용',
  },
  {
    id: 2,
    createdDate: new Date().getTime(),
    emotionId: 2,
    content: '2번 내용',
  },
];

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE':
      return [action.data, ...state];
      break;
    case 'EDIT':
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
      break;
    case 'DELETE':
      return state.filter((item) => String(item.id) !== String(action.data.id));
      break;
    default:
      return state;
      break;
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  // create diary
  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: idRef.current++,
        createdDate: new Date().getTime(),
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
      type: 'CREATE',
      data: {
        id,
      },
    });
  };

  return (
    <div>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={(onCreate, onEdit, onDelete)}>
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
