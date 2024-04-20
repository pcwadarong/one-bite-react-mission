import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Diary from './pages/Diary';
import New from './pages/New';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

function App() {
  const nav = useNavigate();

  const onClickBtn = () => {
    nav('/Edit');
  };
  return (
    <div>
      <Link to={'/'}> Home </Link>
      <Link to={'/New'}> New </Link>
      <Link to={'/Diary'}> Diary </Link>
      {/* <Link to={'/Edit'}> Edit </Link> */}

      <button onClick={onClickBtn}>btn to Edit</button>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/New" element={<New />}></Route>
        <Route path="/Diary/:id" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />}></Route>
        <Route path="/Edit/:id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
