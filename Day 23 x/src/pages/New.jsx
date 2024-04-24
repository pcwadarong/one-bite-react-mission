import Header from '../components/Header';
import Editor from '../components/Editor';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';
import usePageTitle from '../hooks/usePageTitle';

export default function New() {
  const { onCreate } = useContext(DiaryDispatchContext);
  usePageTitle('새로운 일기 작성하기');
  const nav = useNavigate();
  const handleOnSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', { replace: true });
  };

  return (
    <div>
      <Header
        // -1 는 뒤로 가는 명령
        leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)} />}
        title={'오늘의 일기 쓰기'}
      />
      <Editor onSubmit={handleOnSubmit} /> {/* onSubmit prop 전달 */}
    </div>
  );
}
