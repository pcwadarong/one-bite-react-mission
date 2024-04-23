import Header from '../components/Header';
import Editor from '../components/Editor';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

export default function New() {
  const nav = useNavigate();

  return (
    <div>
      <Header
      // -1 는 뒤로 가는 명령
        leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)} />}
        title={'오늘의 일기 쓰기'}
      />
      <Editor />
    </div>
  );
}
