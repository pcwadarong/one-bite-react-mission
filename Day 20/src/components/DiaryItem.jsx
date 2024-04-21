import Button from './Button';
import { getEmotionImage } from '../utils/get-emotion-image';

const DiaryItem = ({ data }) => {
  const emotionId = 3;

  return (
    <div className="flex justify-between gap-3.5 items-center border-b-2 py-5">
      <div
        className={`min-w-36 h-20 flex justify-center cursor-pointer rounded-lg bg-emotion${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} alt="emotion" />
      </div>
      <div className="flex-1 cursor-pointer">
        <div className="font-bold text-2xl">date</div>
        <div className="text-lg">content</div>
      </div>
      <div>
        <Button text={'수정'} />
      </div>
      <div>
        <Button text={'삭제'} color={'red'} />
      </div>
    </div>
  );
};

export default DiaryItem;
