import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import Button from './Button';
import { getEmotionImage } from '../utils/get-emotion-image';
import { DiaryDispatchContext } from '../App';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const colorVariants = {
    1: 'bg-emotion1',
    2: 'bg-emotion2',
    3: 'bg-emotion3',
    4: 'bg-emotion4',
    5: 'bg-emotion5',
  };

  const emotionColor = colorVariants[emotionId];
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);

  const handleDeleteBtnClick = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요.')) {
      onDelete(id);
    }
  };

  return (
    <div className="flex justify-between gap-3.5 items-center border-b-2 py-5">
      <div
        onClick={() => nav(`/Diary/${id}`)}
        className={`min-w-36 h-20 flex justify-center cursor-pointer rounded-lg ${emotionColor}`}
      >
        <img src={getEmotionImage(emotionId)} alt="emotion" />
      </div>
      <div
        onClick={() => nav(`/Diary/${id}`)}
        className="flex-1 cursor-pointer"
      >
        <div className="font-bold text-2xl">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="text-lg">{content}</div>
      </div>
      <div className="flex gap-3">
        <Button
          text={<FontAwesomeIcon icon={faPenToSquare} />}
          onClick={() => nav(`/Edit/${id}`)}
        />
        <Button
          text={<FontAwesomeIcon icon={faTrashCan} />}
          onClick={handleDeleteBtnClick}
          color={'red'}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
