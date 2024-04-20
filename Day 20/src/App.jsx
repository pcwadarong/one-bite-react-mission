import { Routes, Route } from 'react-router-dom';
import Diary from './pages/Diary';
import New from './pages/New';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Edit from './pages/Edit';
//import { getEmotionImage } from './utils/get-emotion-image';
import Button from './components/Button';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header
        title={'4월'}
        leftChild={<Button text={'<'} className={'px-6'}/>}
        rightChild={<Button text={'>'} className={'px-6'}/>}
      />
      <Button text={'수정'} />
      <Button text={'등록'} color={'green'} />
      <Button text={'삭제'} color={'red'} />

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
