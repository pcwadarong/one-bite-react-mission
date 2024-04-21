import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import Button from './Button';
import { getEmotionImage } from '../utils/get-emotion-image';

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

  return (
    <div className="flex justify-between gap-3.5 items-center border-b-2 py-5">
      <div onClick={() => nav(`/Diary/${id}`)}
        className={`min-w-36 h-20 flex justify-center cursor-pointer rounded-lg ${emotionColor}`}
      >
        <img src={getEmotionImage(emotionId)} alt="emotion" />
      </div>
      <div onClick={() => nav(`/Diary/${id}`)} className="flex-1 cursor-pointer">
        <div className="font-bold text-2xl">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="text-lg">{content}</div>
      </div>
      <div className="flex gap-3">
        <Button text={<FontAwesomeIcon icon={faPenToSquare} />} onClick={() => nav(`/Edit/${id}`)}/>
        <Button text={<FontAwesomeIcon icon={faTrashCan} />} color={'red'} />
      </div>
    </div>
  );
};

export default DiaryItem;
