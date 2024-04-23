import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import useDiary from '../hooks/useDiary';
import { getStringDate } from '../utils/get-string-date';
import Header from '../components/Header';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import usePageTitle from '../hooks/usePageTitle';

export default function Diary() {
  const nav = useNavigate();
  const params = useParams();
  const curDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기`);
  if (!curDiaryItem){
    return <div>데이터 로딩중....!</div>
  }
  const { createdDate, emotionId, content } = curDiaryItem;
  const date = getStringDate(new Date(createdDate));

  return (
    <div>
      <Header
        leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)} />}
        title={`${date} 기록`}
        rightChild={
          <Button
            text={'수정하기'}
            onClick={() => {
              nav(`/Edit/${params.id}`);
            }}
          />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
}
