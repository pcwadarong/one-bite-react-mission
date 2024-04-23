import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';

export default function Diary() {
  const nav = useNavigate();
  const params = useParams();

  return (
    <div>
      <Header
        leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)} />}
        title={'기록'}
        rightChild={
          <Button
            text={'수정하기'}
            onClick={() => {
              nav(`/Edit/${params.id}`);
            }}
          />
        }
      />
      <Viewer params={params}/>
    </div>
  );
}
