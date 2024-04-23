import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DiaryDispatchContext } from '../App';

import Header from '../components/Header';
import Button from '../components/Button';
import Editor from '../components/Editor';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

export default function Edit() {
  const params = useParams();
  const nav = useNavigate();
  const { onEdit, onDelete } = useContext(DiaryDispatchContext);
  usePageTitle(`${params.id}번 일기 수정하기`);

  const curDiaryItem = useDiary(params.id);

  const handleOnSubmit = (input) => {
    if (window.confirm('일기 수정을 완료했나요?')) {
      onEdit(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav('/');
    }
  };

  const handleDeleteBtnClick = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요.')) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  return (
    <div>
      <Header
        leftChild={<Button text={'< 뒤로가기'} onClick={() => nav(-1)} />}
        title={'일기 수정하기'}
        rightChild={
          <Button
            text={'삭제하기'}
            color={'red'}
            onClick={handleDeleteBtnClick}
          />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={handleOnSubmit} />
    </div>
  );
}
