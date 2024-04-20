import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Diary from './pages/Diary';
import New from './pages/New';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';

import emotion1 from './assets/emotion1.png';
import emotion2 from './assets/emotion2.png';
import emotion3 from './assets/emotion3.png';
import emotion4 from './assets/emotion4.png';
import emotion5 from './assets/emotion5.png';

function App() {
  const nav = useNavigate();

  const onClickBtn = () => {
    nav('/Edit');
  };
  return (
    <div>
      <div>
        <img src={emotion1} alt="emotion1" />
        <img src={emotion5} alt="emotion5" />
      </div>
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
